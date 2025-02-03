import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Comment page title ${params.id}`,
    };
}

const CommentPage: FC<Props> = ({params}) => {
    return (
        <div>
            Comment page content {params.id}
        </div>
    );
};

export default CommentPage;