import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import Statuscard from "../components/statusxard";

export default function Myinventorynew() {
    return (
        <div className="p-8 bg-white min-h-screen">
            <div className="header flex justify-between mb-10 items-end">
                <div className="headerInfo">
                    <p className="text-[#735C00] uppercase font-bold text-[12px] tracking-widest mb-1">Facility Overview</p>
                    <h1 className="text-5xl font-extrabold text-[#013220]">My Inventory</h1>
                </div>
                <div className="headerActions">
                    <Button className="bg-[#013220] text-white rounded-none uppercase hover:bg-[#0a4630]! text-xs font-bold px-2"><HiPlus  className="mr-2 h-4 w-4"/> Add new Item</Button>
                </div>
            </div>
            <div className="statusCards flex justify-between items-center gap-4 w-full bg-amber-950">
                <Statuscard title="Total Products" value="12" status="Active"/>
                <Statuscard title="Total Products" value="12" status="Active"/>
                <Statuscard title="Total Products" value="12" status="Active"/>
            </div>
        </div>
    );
}