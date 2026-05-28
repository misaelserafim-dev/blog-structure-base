import { posts } from '@/data/posts'

export async function FindAllPosts()
{
  return posts;
}

export async function findPostBySlug(slug: string) 
{
  return (
    posts.find((post) => post.slug === slug) ?? null
  )
}