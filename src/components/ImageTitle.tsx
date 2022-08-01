type Props = {
    post: any,
}

export function ImageTitle({ post }: Props) {
    return (
        <h2 className="title">
            {post.title}
        </h2>
    )
}