import {ICars} from "@/models/cars/ICars";
import {axiosInstance} from "@/constants/url";

// Отримати всі авто
export const getAllCars = async ():Promise<ICars[]> =>{
    try {
        const { data } = await axiosInstance.get<ICars[]>("/cars");
        return data;
    } catch (error) {
        console.error("Помилка пошуку автомобілів:", error);
        throw error;
    }
}

// Отримати авто за ID
export const getCarById = async (id: number): Promise<ICars> => {
    try {
        const { data } = await axiosInstance.get<ICars>(`/cars/${id}`);
        return data;
    } catch (error) {
        console.error("Помилка пошуку авто:", error);
        throw error;
    }
};

// додати авто
export const createCar = async (newCar: ICars): Promise<ICars> => {
    try {
        const { data } = await axiosInstance.post<ICars>("/cars", newCar);
        console.log('Car created successfully:', data);
        return data;
    } catch (error: any) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            throw new Error(`Server error: ${JSON.stringify(error.response.data)}`);
        }
        console.error("Помилка створення авто:", error);
        throw new Error("Error creating car: " + error.message);
    }
};