import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import ProductCard from "../components/productcard";
import FeedRow from "../components/feedrow";
import { FaAdn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect((() => {
        fetch("https://dummyjson.com/products?limit=3")
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.log(err));
    }
    ), []);

    return (
        <>
            <div className="banner flex flex-col md:flex-row justify-between md:items-end m-5">
                <div className="uppercase">
                    <p className="mb-2 text-[10px] text-[#735C00] font-bold tracking-[0.2em]">
                        Global Marketplace
                    </p>
                    <h1 className="text-4xl font-extrabold text-[#013220] tracking-tight">
                        WHOLESALE INVENTORY
                    </h1>
                </div>
                <div className="buttons flex gap-3 pb-1">
                    <Button className="uppercase bg-[#735C00] text-white border-0 !rounded-none hover:bg-[#413400] transition-colors ease-in-out duration-200" as={Link} to={"/marketplace"}>
                        Bulk Procurement
                    </Button>
                </div>
            </div>
            <div className="peroductDisplay grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 pt-4">
                {
                    products.map(
                        (product) => {
                            return <ProductCard props={product} key={product.id} />
                        }
                    )
                }
            </div>

            <div className="bottom-banner flex flex-col justify-between gap-15 my-10 mr-5 py-15 lg:flex-row">
                <div className="flex flex-col gap-10 px-5 bg-[#F9F9F9]">
                    <h2 className="uppercase font-bold text-[#013220] text-4xl leading-[1.1] mb-10">
                        Secure your supply chain infrastructure
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                        Our platform leverages direct manufacturer links to bypass traditional brokerage fees...
                    </p>
                    <div className="flex flex-col font-bold">
                        <span className="text-[#735C00] text-4xl">$1.2B</span>
                        <span className="text-[10px] text-gray-400 uppercase">Annual Volume</span>
                    </div>
                </div>
                <div className="ActiveQuotationFeed bg-white shadow-sm p-8 border border-gray-100 !rounded-none">
                    <p className="uppercase text-[#735C00] text-[10px] font-bold tracking-[0.2em] mb-5">
                        Active Quotation Feed
                    </p>
                    <div className="feedTable flex flex-col gap-5">
                        {
                            products.map(
                                (product) => {
                                    return <FeedRow key={product.id} icon={FaAdn} title={product.title.split(" ").slice(0, 3).join(" ")} desc={(product.description.split(" ").slice(0, 5).join(" ")) + " ..."} urgency={product.stock < 40 ? "high" : product.stock < 70 ? "medium" : "low"} />
                                }
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    );
}