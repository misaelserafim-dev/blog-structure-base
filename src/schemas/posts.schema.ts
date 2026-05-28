export interface Post {
  id: string
  slug: string
  title: string
  excerpt?: string
  content: string
  coverImage: string
  publishedAt: string
  author: {
    name: string
    avatar: string
  }
  tags?: string[]
}