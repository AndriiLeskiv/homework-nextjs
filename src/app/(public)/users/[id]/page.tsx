import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `User page title ${params.id}`,
    };
}

const UserPage: FC<Props> = ({params}) => {
    return (
        <div>
            User page content {params.id}
        </div>
    );
};

export default UserPage;