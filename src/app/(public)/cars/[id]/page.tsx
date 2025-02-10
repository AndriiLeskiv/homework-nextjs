import {FC} from "react";
import {Metadata} from "next";
import {ICars} from "@/models/cars/ICars";
import {getCarById} from "@/services/api.service";

type Props = {
    params: { id: string };
    car: ICars;
}

export const generateMetadata = async ({params}: Props):Promise<Metadata> => {
    const {id} =  await params;
    return {
        title: `Car page title ${id}`,
    };
}

const CarPage: FC<Props> = async ({params}) => {
    const car:ICars = await getCarById(+params.id);

    return (
        <div>
            <h1>Car Details</h1>
            <p>Brand: {car.brand}</p>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
        </div>
    );
};

export default CarPage;