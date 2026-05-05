import { Badge, Button, Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard(props) {


    const product = props.props;

    // console.log(product);
    // console.log(product.rating);

    return (
        <>
            <Card
                theme={{
                    root: {
                        base: "group !border-0 !rounded-none !w-full !bg-white !shadow-md"
                    }
                }}
            >
                <div className="relative h-64 overflow-hidden">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-300" />
                    <Badge color="success" className="absolute top-0 right-0 rounded-none! uppercase px-3 py-1 font-bold text-[10px]">
                        In Stock
                    </Badge>
                </div>
                <Link as={Link} to={`/product/${product.id}`}>
                    <h5 className="text-lg font-bold uppercase text-gray-900">
                        {product.title}
                    </h5>
                </Link>
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
                <div className="flex flex-col items-center justify-between">
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
                    <Button className="uppercase bg-white text-[#013220] border border-[#013220] hover:bg-[#013220] hover:text-white transition-colors ease-in-out duration-300 rounded-none mt-5" as={Link} to={`/product/${product.id}`}>
                        Procure Selection
                    </Button>
                </div>
            </Card>
        </>
    );
};