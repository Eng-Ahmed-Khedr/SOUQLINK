import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge, Button, TextInput } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { RiNumbersLine } from "react-icons/ri";

export default function Product() {

    const id = useParams().id;

    const [product, setProduct] = useState({});
    useEffect((() => {
        fetch(`https://dummyjson.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));
    }
    ), []);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 pt-4">
                <div>
                    <h1 className="text-2xl font-bold uppercase text-gray-900">
                        {product.title}
                    </h1>
                    <div className="mb-5 mt-2.5 flex items-center">
                        {
                            Array.from({ length: Math.round(product.rating || 0) })
                                .map((_, index) => (
                                    < FaStar key={index} className="text-yellow-500 overflow-hidden" />
                                ))
                        }
                        <span className="ml-3 mr-2 rounded px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
                            {product.rating}
                        </span>
                    </div>
                </div>
                <div className="relative h-fit w-fit overflow-hidden">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-300" />
                    <Badge color="success" className="absolute top-0 right-0 rounded-none! uppercase px-3 py-1 font-bold text-[10px]">
                        In Stock
                    </Badge>
                </div>
                <div className="flex flex-col w-full">
                    <div className="row flex justify-between text-sm font-bold text-[#99A1AF]">
                        <span>units: 1 - 20 UNITS </span>
                        <span>: 42.50 USD / UNIT</span>
                    </div>
                    <div className="row flex justify-between text-sm font-bold text-[#735C00]">
                        <span>units: 21 - 100 UNITS </span>
                        <span>: 38.00 USD / UNIT </span>
                    </div>
                    <div className="row flex justify-between text-sm font-bold text-[#99A1AF]">
                        <span>units: 100+ UNITS </span>
                        <span>: 35.20 USD / UNIT</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2  p-5">
                    <form className="hidden sm:block">
                        <TextInput id="amount" type="number" placeholder="Amount" icon={RiNumbersLine} theme={{ field: { input: { base: "!bg-[#E7E8E9] !text-black placeholder:!text-[#6B7280] !border-none !rounded-none !uppercase !font-bold !ps-10 !pe-20" } } }} />
                    </form>
                    <Button className="uppercase bg-white text-[#013220] border border-[#013220] hover:bg-[#013220] hover:text-white transition-colors ease-in-out duration-300 rounded-none mt-5">
                        Procure Selection
                    </Button>
                </div>
            </div>
        </>
    );
}