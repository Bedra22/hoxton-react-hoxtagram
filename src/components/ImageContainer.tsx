
import { Image } from "./Image";

type Props = {
    post: any,
    comments: any,
    image: any
}

export function ImageContainer({ post, comments, image }: Props) {
    return (
        <section className="image-container">
            {image.map((post: any) =>
                <Image post={post} comments={comments} />
            )}
        </section>
    )
}