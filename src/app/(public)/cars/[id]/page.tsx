import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `Car page title ${params.id}`,
    };
}

const CarPage: FC<Props> = ({params}) => {
    return (
        <div>
            Car page content {params.id}
        </div>
    );
};

export default CarPage;