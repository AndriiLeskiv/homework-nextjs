import {getAllCars} from "@/services/api.service";
import {ICars} from "@/models/cars/ICars";
import {CarComponent} from "@/components/cars/CarComponent";

export const CarsComponent = async () => {
    const cars: ICars[] = await getAllCars();

    return (
        <div>
            {cars.map((car) => (
                <CarComponent key={car.id} car={car}/>
            ))}
        </div>
    );
};