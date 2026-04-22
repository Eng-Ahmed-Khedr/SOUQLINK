import { Button, Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Badge, TextInput } from "flowbite-react";
import { HiPlus, HiSearch, HiFilter, HiChevronLeft, HiChevronRight, HiArrowSmUp, HiExclamationCircle, HiTruck, HiOutlineExclamation } from "react-icons/hi";
import StatCard from "../components/statecard";

export default function Myinventory() {
    const inventoryData = [
        { sku: "ST-HR-001", name: "Hot Rolled Steel Coil", category: "Raw Materials", stock: 4500, uom: "MT", reorder: 1200, status: "IN STOCK", color: "success" },
        { sku: "AL-EX-402", name: "Aluminum Extrusion Profile A", category: "Components", stock: 850, uom: "Units", reorder: 1000, status: "LOW STOCK", color: "warning" },
        { sku: "CU-WR-992", name: "Copper Wiring (Heavy Duty)", category: "Electrical", stock: 0, uom: "Meters", reorder: 5000, status: "OUT OF STOCK", color: "failure" },
        { sku: "PL-PL-110", name: "Industrial Polymer Pellets", category: "Chemicals", stock: 12000, uom: "KG", reorder: 5000, status: "IN STOCK", color: "success" },
        { sku: "MC-VL-04", name: "High-Pressure Valve Assembly", category: "Mechanical", stock: 14, uom: "Units", reorder: 20, status: "LOW STOCK", color: "warning" },
    ];

    return (
        <div className="p-8 bg-white min-h-screen">
            {/* --- HEADER --- */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <p className="text-[12px] font-bold text-[#735C00] uppercase tracking-widest mb-1">Facility Overview</p>
                    <h1 className="text-5xl font-extrabold text-[#013220]">My Inventory</h1>
                </div>
                <Button className="bg-[#013220]! hover:bg-[#0a4630]! rounded-none! uppercase font-bold text-xs px-2">
                    <HiPlus className="mr-2 h-4 w-4" /> Add New Item
                </Button>
            </div>

            {/* --- STATS CARDS --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <StatCard
                    label="Total Stock Value"
                    value="$14.2M"
                    subText="+3.4% this quarter"
                    icon={HiArrowSmUp}
                    borderColor="border-[#013220]"
                    variant="inventory"
                />
                <StatCard
                    label="Items Near Reorder"
                    value="24"
                    subText="Action required"
                    icon={HiOutlineExclamation} // Triangle icon to match image
                    borderColor="border-[#D42A2A]"
                    variant="inventory"
                />
                <StatCard
                    label="Recent Arrivals (7 Days)"
                    value="1,402"
                    subText="8 deliveries processed"
                    icon={HiTruck}
                    borderColor="border-[#013220]"
                    variant="inventory"
                />
            </div>

            {/* --- TABLE SECTION --- */}
            <div className="border border-gray-100 shadow-sm rounded-none! overflow-hidden">
                <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
                    <h2 className="text-xl font-bold text-[#013220]">Current Holdings</h2>
                    <div className="flex gap-2 w-full md:w-auto">
                        <TextInput
                            icon={HiSearch}
                            placeholder="Search SKU or Name..."
                            className="w-full md:w-80"
                            theme={{ field: { input: { base: "!bg-[#F9FAFB] !border-gray-300 !rounded-none focus:!ring-0 focus:!border-gray-400" } } }}
                        />
                        <Button color="light" className="rounded-none! border-gray-300 uppercase font-bold text-xs">
                            <HiFilter className="mr-2 h-4 w-4" /> Filter
                        </Button>
                    </div>
                </div>

                <Table hoverable className="rounded-none!">
                    <TableHead>
                        <TableRow>
                            <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase font-bold text-gray-500">SKU</TableHeadCell>
                            <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase font-bold text-gray-500">Item Name</TableHeadCell>
                            <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase font-bold text-gray-500">Category</TableHeadCell>
                            <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase font-bold text-gray-500">Current Stock</TableHeadCell>
                            <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase font-bold text-gray-500">UOM</TableHeadCell>
                            <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase font-bold text-gray-500 text-right">Reorder Pt.</TableHeadCell>
                            <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase font-bold text-gray-500">Status</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {inventoryData.map((item, idx) => (
                            <TableRow key={idx} className="bg-white">
                                <TableCell className="text-[10px] font-bold text-gray-400">{item.sku}</TableCell>
                                <TableCell className="font-bold text-[#013220]">{item.name}</TableCell>
                                <TableCell className="text-sm text-gray-500">{item.category}</TableCell>
                                <TableCell className={`font-bold ${item.stock === 0 ? 'text-red-600' : item.stock < item.reorder ? 'text-yellow-600' : 'text-[#013220]'}`}>
                                    {item.stock.toLocaleString()}
                                </TableCell>
                                <TableCell className="text-sm text-gray-500">{item.uom}</TableCell>
                                <TableCell className="text-sm text-gray-500 text-right">{item.reorder.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Badge color={item.color} className="rounded-none! uppercase font-bold text-[9px] w-fit px-2">
                                        {item.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="p-4 bg-[#F9F9F7] flex justify-between items-center border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Showing 1-5 of 142 items</span>
                    <div className="flex gap-4">
                        <button className="hover:text-[#013220] text-gray-400 transition-colors"><HiChevronLeft className="h-5 w-5" /></button>
                        <button className="hover:text-[#013220] text-gray-400 transition-colors"><HiChevronRight className="h-5 w-5" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}