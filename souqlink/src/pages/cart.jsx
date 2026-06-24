import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../store/slices/cart.slice";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    const dispatch = useDispatch();

    return (
        <div>
            <Table hoverable>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Product name</TableHeadCell>
                        <TableHeadCell>title</TableHeadCell>
                        <TableHeadCell>Category</TableHeadCell>
                        <TableHeadCell>Price</TableHeadCell>
                        <TableHeadCell>quantity</TableHeadCell>
                        <TableHeadCell></TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    {cart.map((product, index) => {
                        // console.log(product);
                        return (
                            <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell>
                                    <img src={product.thumbnail} alt={product.title} />
                                </TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {product.title}
                                </TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>
                                    <Button onClick={() => {
                                        dispatch(deleteFromCart(index));
                                    }} className="cursor-pointer">Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
}