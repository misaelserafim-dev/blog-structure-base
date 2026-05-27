export type PostProps = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorId: string;
  categoryId?: string;
  tags?: string[];
  publishedAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
};

export class Post {
    private props: PostProps;

    private constructor(props: PostProps) {
        this.validate(props);
        this.props = props;
    }

    static create(props: Omit<PostProps, "id | createdAt">): Post {
        return new Post({
            ...props,
            id: crypto.randomUUID(),
            createdAt: new Date()
        }); 
    }

}