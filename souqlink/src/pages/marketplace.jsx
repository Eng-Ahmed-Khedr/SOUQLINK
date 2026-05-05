import { useState, useEffect } from "react";
import ProductCard from "../components/productcard";

export default function Marketplace() {
    const [products, setProducts] = useState([]);
    useEffect((() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.log(err));
    }
    ), []);
    return (
        <>
            <div className="productDisplay grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 pt-4">
                {
                    products.map((product) => {
                        return <ProductCard props={product} key={product.id} />;
                    })
                }
            </div>
        </>
    );
}