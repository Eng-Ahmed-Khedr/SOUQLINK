import { Card } from "flowbite-react";

export default function Statuscard(props){
    return (
        <Card className="w-full bg-white! border-none rounded-none shadow-lg" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                {props.title}
            </h5>
            <p className="font-normal text-gray-700">
                {props.value}
            </p>
            <p className="font-normal text-gray-700">
                {props.status}
            </p>
        </Card>
    );
}
    
