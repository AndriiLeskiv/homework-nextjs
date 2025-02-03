import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Post page title ${params.id}`,
    };
}

const PostPage: FC<Props> = ({params}) => {
    return (
        <div>
            Post page content {params.id}
        </div>
    );
};

export default PostPage;