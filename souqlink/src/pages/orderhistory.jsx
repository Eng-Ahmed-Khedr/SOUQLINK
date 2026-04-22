import { Button, TextInput, Select, Badge } from "flowbite-react";
import {
    HiSearch, HiFilter, HiDownload, HiOutlineTruck,
    HiOutlineOfficeBuilding, HiOutlineExclamation, HiOutlineCheckCircle,
    HiOutlineCube, HiOutlineEye, HiOutlineRefresh,
    HiOutlineStatusOnline
} from "react-icons/hi";
import { FaTrain, FaPlane, FaTruckMoving } from "react-icons/fa";
import StatCard from "../components/statecard";

export default function OrderHistory() {
    const orders = [
        {
            id: "PO-9942-A",
            item: "Cold Rolled Steel Coil - Grade 304",
            supplier: "Titan Metallurgical Corp.",
            status: "DELIVERED",
            statusColor: "success",
            date: "Oct 24, 2023",
            time: "14:30 EST",
            stats: { qty: "250 Tons", dim: "0.5mm x 1200mm", value: "$345,000", plant: "Facility Alpha" },
            carrier: "Apex Freight Heavy",
            carrierIcon: FaTruckMoving,
            type: "delivered"
        },
        {
            id: "PO-9945-B",
            item: "Industrial Grade Lubricant - HVI 46",
            supplier: "PetroChem Global Solutions",
            status: "IN TRANSIT",
            statusColor: "warning",
            date: "Est. Oct 28, 2023",
            time: "On Schedule",
            stats: { qty: "50 Barrels", dim: "55 Gal Drums", value: "$42,500", plant: "Facility Bravo" },
            carrier: "National Rail Cargo",
            carrierIcon: FaTrain,
            type: "transit"
        },
        {
            id: "PO-9948-C",
            item: "Precision Bearings - Ceramic Hybrid",
            supplier: "KugelFischer Advanced Parts",
            status: "DELAYED",
            statusColor: "failure",
            date: "Update Pending",
            time: "Customs Hold",
            stats: { qty: "5,000 Units", dim: "ISO P4 / ABEC 7", value: "$125,000", plant: "Facility Alpha" },
            carrier: "Global Air Freight",
            carrierIcon: FaPlane,
            type: "delayed"
        }
    ];

    return (
        <div className="p-8 bg-white min-h-screen">

            {/* --- TOP HEADER --- */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <p className="text-[12px] font-bold text-[#735C00] uppercase tracking-[0.2em] mb-1">Logistics & Tracking</p>
                    <h1 className="text-5xl font-extrabold text-[#013220]">Order History</h1>
                </div>
                <div className="flex gap-3">
                    <Button color="gray" className="rounded-none! border-gray-300 uppercase font-bold text-xs bg-white! hover:bg-gray-50! text-black!">
                        <HiFilter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button className="bg-[#013220]! hover:bg-[#0a4630]! rounded-none! uppercase font-bold text-xs text-white!">
                        <HiDownload className="mr-2 h-4 w-4" /> Export CSV
                    </Button>
                </div>
            </div>

            {/* --- STATS ROW --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
                <StatCard label="Total Orders (YTD)" value="1,248" borderColor="border-[#013220]" variant="bids" icon={HiOutlineCube} />
                <StatCard label="In Transit" value="42" borderColor="border-[#735C00]" variant="bids" icon={HiOutlineTruck} />
                <StatCard label="Delayed / Issues" value="3" borderColor="border-[#D42A2A]" variant="bids" icon={HiOutlineExclamation} />
                <StatCard label="Total Volume (Tons)" value="14,050" borderColor="border-gray-300" variant="bids" icon={HiOutlineOfficeBuilding} />
            </div>

            {/* --- SEARCH & SORT --- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 bg-[#F9F9F7] p-4 border border-gray-100 rounded-none!">
                <TextInput
                    icon={HiSearch}
                    placeholder="Search by PO Number, Material, or Supplier..."
                    className="w-full md:w-1/2"
                    theme={{ field: { input: { base: "!bg-white !border-gray-300 !rounded-none focus:!ring-0" } } }}
                />
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Sort by:</span>
                    <Select theme={{ field: { select: { base: "!rounded-none !bg-white !border-gray-300 focus:!ring-0 font-bold text-xs" } } }}>
                        <option>Date (Newest First)</option>
                        <option>Value (Highest)</option>
                    </Select>
                </div>
            </div>

            {/* --- ORDERS LIST --- */}
            <div className="space-y-4 mb-10">
                {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>

            {/* --- PAGINATION --- */}
            <div className="flex justify-between items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest pt-6 border-t border-gray-200">
                <span>Showing 1 to 3 of 1,248 entries</span>
                <div className="flex items-center gap-1">
                    <Button color="gray" className="rounded-none! bg-white! hover:bg-gray-50! border-gray-200! text-gray-400! uppercase text-[10px]">Prev</Button>
                    <Button className="rounded-none! bg-[#013220]! text-white! px-1 uppercase text-[10px]">1</Button>
                    <Button color="gray" className="rounded-none! bg-white! hover:bg-gray-50! border-gray-200! text-gray-600! uppercase text-[10px]">2</Button>
                    <Button color="gray" className="rounded-none! bg-white! hover:bg-gray-50! border-gray-200! text-gray-600! uppercase text-[10px]">3</Button>
                    <span className="px-2">...</span>
                    <Button color="gray" className="rounded-none! bg-white! hover:bg-gray-50! border-gray-200! text-gray-600! uppercase text-[10px]">416</Button>
                    <Button color="gray" className="rounded-none! bg-white! hover:bg-gray-50! border-gray-200! text-gray-600! uppercase text-[10px]">Next</Button>
                </div>
            </div>
        </div>
    );
}

function OrderCard({ order }) {
    // Border logic to match the mockup
    const statusStyles = {
        delivered: "border-l-[6px] border-l-[#013220]",
        transit: "border-t-[6px] border-t-[#735C00]",
        delayed: "border-[1px] border-[#D42A2A]"
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 bg-white shadow-sm rounded-none! overflow-hidden ${statusStyles[order.type]}`}>

            {/* Status Bar */}
            <div className="md:col-span-2 bg-[#F9F9F7] p-6 border-r border-gray-100">
                <Badge color={order.statusColor} className="rounded-none! uppercase font-black text-[9px] mb-4 w-fit px-2 py-1">
                    {order.type === 'delivered' && <HiOutlineCheckCircle className="mr-1 inline text-xs" />}
                    {order.type === 'transit' && <HiOutlineTruck className="mr-1 inline text-xs" />}
                    {order.type === 'delayed' && <HiOutlineExclamation className="mr-1 inline text-xs" />}
                    {order.status}
                </Badge>
                <h4 className="font-bold text-[#013220] text-sm leading-tight">{order.date}</h4>
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-6 tracking-tight">{order.time}</p>
                <span className="text-[9px] text-gray-400 uppercase font-bold block mb-1">PO Number</span>
                <span className="text-xs font-bold text-[#013220]">{order.id}</span>
            </div>

            {/* Details Section */}
            <div className="md:col-span-7 p-6">
                <h3 className="text-xl font-black text-[#013220] uppercase mb-1 tracking-tight">{order.item}</h3>
                <p className="text-xs text-gray-400 font-bold mb-8">Supplier: <span className="text-gray-600">{order.supplier}</span></p>

                <div className="grid grid-cols-4 gap-2">
                    <DetailItem label="Quantity" value={order.stats.qty} />
                    <DetailItem label={order.type === 'transit' ? "Packaging" : order.type === 'delayed' ? "Spec" : "Dimensions"} value={order.stats.dim} />
                    <DetailItem label="Total Value" value={order.stats.value} />
                    <DetailItem label="Dest. Plant" value={order.stats.plant} />
                </div>
            </div>

            {/* Actions Section */}
            <div className="md:col-span-3 p-6 flex flex-col justify-between border-l border-gray-100 bg-[#FCFCFC]">
                <div className="text-right">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-2">Carrier</p>
                    <div className="flex items-center justify-end gap-2 font-bold text-[#013220] text-xs">
                        <order.carrierIcon className="text-gray-400" />
                        {order.carrier}
                    </div>
                </div>

                <div className="space-y-2 mt-6">
                    {order.type === 'transit' && (
                        <Button className="w-full bg-[#013220]! hover:bg-[#0a4630]! rounded-none! uppercase font-bold text-[10px]">
                            <HiOutlineStatusOnline className="mr-2 h-4 w-4" /> Live Track
                        </Button>
                    )}
                    {order.type === 'delayed' && (
                        <Button className="w-full bg-[#D42A2A]! hover:bg-[#b91c1c]! rounded-none! uppercase font-bold text-[10px]">
                            <HiOutlineExclamation className="mr-2 h-4 w-4" /> Resolve Issue
                        </Button>
                    )}
                    {order.type === 'delivered' && (
                        <Button color="gray" className="w-full bg-[#E7E8E9]! hover:bg-gray-300! border-none! rounded-none! uppercase font-bold text-[10px] text-[#013220]!">
                            <HiOutlineEye className="mr-2 h-4 w-4" /> View Manifest
                        </Button>
                    )}

                    <Button color="gray" className="w-full bg-transparent! border-none! shadow-none! hover:bg-gray-100! rounded-none!">
                        <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase text-[#013220]">
                            {order.type === 'delivered' ? (
                                <>
                                    <HiOutlineRefresh className="text-[#735C00] h-4 w-4" /> Reorder
                                </>
                            ) : (
                                <>
                                    <HiOutlineEye className="text-gray-400 h-4 w-4" /> View Details
                                </>
                            )}
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function DetailItem({ label, value }) {
    return (
        <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter mb-1">{label}</p>
            <p className="text-xs font-black text-[#013220] leading-tight">{value}</p>
        </div>
    );
}