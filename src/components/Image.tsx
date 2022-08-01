import { ImageLike } from "./ImageLike"
import { ImageSrc } from "./ImageSrc"
import { ImageTitle } from "./ImageTitle"

type Props = {
    post: any,
    comments: any
}

export function Image({ post, comments }: Props) {
    return (
        <article className="image-card">
            <ImageTitle post={post} />

            <ImageSrc post={post} />
            <ImageLike post={post} />

            <ul className="comments">
                {comments.map((comment) =>
                    <li>
                        {comment.content}
                    </li>
                )}
            </ul>
        </article>
    )
}