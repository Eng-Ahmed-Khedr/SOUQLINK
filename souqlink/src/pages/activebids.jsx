import { Button, Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell, Badge, TextInput } from "flowbite-react";
import { HiSearch, HiFilter, HiOutlineClipboardList, HiOutlineClock, HiOutlineChartBar, HiArrowSmDown, HiArrowSmUp, HiDotsVertical, HiOutlineExclamationCircle } from "react-icons/hi";
import StatCard from "../components/statecard";

export default function ActiveBids() {
    const negotiations = [
        { material: "Grade A Steel Plates", specs: "100 Metric Tons • 20mm Thickness", supplier: "Vulcan Forge Co.", bid: "$84,500", terms: "FOB Shanghai", delta: "- 2.4%", deltaColor: "text-green-600", status: "Counter-Offer Sent", statusColor: "warning", time: "12h 45m" },
        { material: "Recycled HDPE Pellets", specs: "50 Metric Tons • Clear/Natural", supplier: "EcoPolymer Inc.", bid: "$42,100", terms: "CIF Rotterdam", delta: "+ 1.1%", deltaColor: "text-red-600", status: "Under Review", statusColor: "indigo", time: "2d 04h" },
        { material: "Industrial Copper Wire", specs: "200 Coils • 14 AWG Bare", supplier: "Global Wireworks", bid: "$112,000", terms: "EXW Chicago", delta: "— 0.0%", deltaColor: "text-gray-400", status: "Expiring Soon", statusColor: "failure", time: "01h 12m" },
        { material: "Aluminum Extrusions", specs: "500 Pieces • Profile A22", supplier: "Alloy Dynamics", bid: "$28,450", terms: "DDP Berlin", delta: "- 0.8%", deltaColor: "text-green-600", status: "Winning Bid", statusColor: "success", time: "-" },
    ];

    return (
        <div className="p-8 bg-white min-h-screen">
            {/* --- TOP HEADER --- */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <p className="text-[12px] font-bold text-[#735C00] uppercase tracking-[0.2em] mb-1">Procurement Operations</p>
                    <h1 className="text-5xl font-extrabold text-[#013220]">Active Bids & Negotiations</h1>
                </div>
                <Button color="light" className="rounded-none! border-[#735C00] text-[#735C00]! uppercase font-bold text-xs">
                    Export Report
                </Button>
            </div>

            {/* --- STATS ROW --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <StatCard label="Total Open Bids" value="142" subText="+12% from last week" icon={HiOutlineClipboardList} borderColor="border-[#013220]" variant="bids" />
                <StatCard label="Pending Responses" value="38" subText="Requires attention" icon={HiOutlineClock} borderColor="border-[#735C00]" variant="bids" />
                <StatCard label="Winning Bids" value="24" subText="Pending final contract" icon={HiOutlineClock} borderColor="border-[#013220]" variant="bids" />
                <StatCard label="Avg. Negotiation Time" value="4.2 Days" subText="-0.5 days optimization" icon={HiOutlineChartBar} borderColor="border-gray-300" variant="bids" />
            </div>

            {/* --- MAIN CONTENT GRID (3/4 Table, 1/4 Sidebar) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* LEFT: TABLE AREA */}
                <div className="lg:col-span-3 border border-gray-100 shadow-sm rounded-none overflow-hidden">
                    <div className="p-6 flex justify-between items-center bg-white">
                        <h2 className="text-xl font-bold text-[#013220]">Active Negotiations List</h2>
                        <div className="flex gap-2">
                            <TextInput icon={HiSearch} placeholder="Search material or supplier..." className="w-64" theme={{ field: { input: { base: "!bg-[#F9FAFB] !border-gray-300 !rounded-none focus:!ring-0" } } }} />
                            <Button color="light" className="rounded-none! border-gray-300"><HiFilter /></Button>
                        </div>
                    </div>

                    <Table hoverable className="rounded-none!">
                        <TableHead>
                            <TableRow>
                                <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase text-gray-500">Material / Specs</TableHeadCell>
                                <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase text-gray-500">Supplier</TableHeadCell>
                                <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase text-gray-500 text-center">Current Bid</TableHeadCell>
                                <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase text-gray-500 text-center">Market Δ</TableHeadCell>
                                <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase text-gray-500 text-center">Status</TableHeadCell>
                                <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase text-gray-500">Time Left</TableHeadCell>
                                <TableHeadCell className="bg-[#F9F9F7]! text-[10px] uppercase text-gray-500">Actions</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="divide-y">
                            {negotiations.map((item, idx) => (
                                <TableRow key={idx} className="bg-white">
                                    <TableCell>
                                        <div className="font-bold text-[#013220]">{item.material}</div>
                                        <div className="text-[10px] text-gray-400 mt-1">{item.specs}</div>
                                    </TableCell>
                                    <TableCell className="text-sm font-medium text-gray-600">{item.supplier}</TableCell>
                                    <TableCell className="text-center">
                                        <div className="font-bold text-[#013220]">{item.bid}</div>
                                        <div className="text-[9px] text-gray-400 uppercase">{item.terms}</div>
                                    </TableCell>
                                    <TableCell className={`text-center font-bold text-xs ${item.deltaColor}`}>
                                        <Badge color={item.delta.includes('-') ? 'success' : item.delta.includes('+') ? 'failure' : 'gray'} className="!rounded-none! inline-flex items-center">
                                            {item.delta.includes('-') ? <HiArrowSmDown /> : item.delta.includes('+') ? <HiArrowSmUp /> : null} {item.delta}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Badge color={item.statusColor} className="rounded-none! uppercase font-bold text-[9px]">{item.status}</Badge>
                                    </TableCell>
                                    <TableCell className={`text-xs font-bold ${item.statusColor === 'failure' ? 'text-red-600' : 'text-gray-600'}`}>{item.time}</TableCell>
                                    <TableCell><HiDotsVertical className="text-gray-400 cursor-pointer" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* RIGHT: SIDEBAR INSIGHTS */}
                <div className="space-y-6">
                    {/* Market Insight Card */}
                    <div className="bg-[#013220] p-6 rounded-none! text-white">
                        <div className="flex items-center gap-2 mb-4 text-[#735C00]">
                            <HiOutlineChartBar className="h-5 w-5" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Market Insight</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Raw material prices are trending up across key sectors. Consider closing open bids on copper and steel within 48 hours to lock in current rates.
                        </p>
                        <div className="space-y-3 text-xs mb-8">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Steel Ind. Avg</span>
                                <span className="text-red-400 font-bold">↑ +2.1%</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Copper Futures</span>
                                <span className="text-red-400 font-bold">↑ +3.4%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Freight Index</span>
                                <span className="text-green-400 font-bold">↓ -0.5%</span>
                            </div>
                        </div>
                        <Button color="light" outline className="w-full rounded-none! border-[#735C00]! text-[#735C00]! font-bold uppercase text-xs">
                            View Market Report
                        </Button>
                    </div>

                    {/* Urgent Actions Card */}
                    <div className="bg-white border border-gray-100 p-6 rounded-none! shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-6">Urgent Actions</span>
                        <div className="space-y-6">
                            <div className="flex gap-3">
                                <HiOutlineExclamationCircle className="text-red-600 h-5 w-5 shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-[#013220]">Supplier 'Global Wireworks' requires revised SLA.</p>
                                    <button className="text-[10px] font-black uppercase text-[#013220] border-b-2 border-[#735C00] mt-2">Review Document</button>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <HiOutlineClock className="text-[#735C00] h-5 w-5 shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-[#013220]">3 Bids expiring today.</p>
                                    <button className="text-[10px] font-black uppercase text-[#013220] border-b-2 border-[#735C00] mt-2">View Expiring</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}