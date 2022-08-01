type Props = {
    post: any,
}
export function ImageSrc({ post }: Props) {
    return (
        <img src={post.image} className="image" />

    )
}