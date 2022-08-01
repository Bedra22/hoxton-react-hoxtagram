type Props = {
    post: any,
}

export function ImageLike({ post }: Props) {
    return (
        <div className="likes-section">
            <span className="likes">
                {post.likes}
            </span>
            <button className="like-button">
                ♥
            </button>
        </div>
    )
}