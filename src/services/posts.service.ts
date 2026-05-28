import * as postsRepository from '@/repositories/posts.repository'

export function getPosts() {
    return postsRepository.FindAllPosts()
}

export function getPostbySlug(slug: string) {
    return postsRepository.findPostBySlug(slug)
}