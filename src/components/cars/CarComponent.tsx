import {ICars} from "@/models/cars/ICars";
import {FC} from "react";
import Link from "next/link";

type Props = {
    car: ICars;
}

export const CarComponent: FC<Props> = ({car}) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 my-4 bg-gray-50 shadow-md">
            <Link href={car.id ? '/cars/' + car.id.toString() : '#'}>
                <h3 className="text-lg font-bold text-gray-800">Car ID: {car.id}</h3>
                <p className="text-sm text-gray-600">Brand: {car.brand}</p>
                <p className="text-sm text-gray-600">Price: ${car.price}</p>
                <p className="text-sm text-gray-600">Year: {car.year}</p>
            </Link>
        </div>
    );
}