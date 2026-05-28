import { ApiError, NetworkError } from '@/shared/errors/errors'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL
if(!BASE_URL) {
    throw new ApiError(404,'ENV BASE URL not exist');
}

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`,{
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      },
    )

    if (!response.ok) {
      throw new ApiError(
        response.status,
        'Erro ao buscar dados',
      )
    }

    return response.json()
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }

    throw new NetworkError()
  }
}