import InformationSought from "../atoms/InformationSought.jsx";
import {Buildings, Flag, HashStraight, MapPin, RoadHorizon, Signpost} from "@phosphor-icons/react";

export default function DataSought() {
    return (
        <div className="mt-10 sm:mt-20">
            <InformationSought text='CEP' icon={<MapPin size={16}/>}/>
            <InformationSought text='Logradouro' icon={<RoadHorizon size={16}/>}/>
            <InformationSought text='Estado' icon={<Flag size={16}/>}/>
            <InformationSought text='Bairro' icon={<Signpost size={16}/>}/>
            <InformationSought text='Localidade' icon={<Buildings size={16}/>}/>
            <InformationSought text='DDD' icon={<HashStraight size={16}/>}/>
        </div>
    )
}