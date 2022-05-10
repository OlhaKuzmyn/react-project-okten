import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {CarDetails} from "../../components";

const CarDetailsPage :FC = () => {
    const {id} = useParams<{ id: string }>();
    const [carInfo, setCarInfo] = useState<null|ICar>(null);

    useEffect(()=>{
        carService.getById(id as string).then(({data})=>setCarInfo(data))
    },[id])

    return (
        <div>
            {carInfo && <CarDetails car={carInfo} />}
        </div>
    );
};

export {CarDetailsPage};