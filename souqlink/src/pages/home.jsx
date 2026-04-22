import { useState } from "react"; // 1. Import useState
import { Button } from "flowbite-react";
import { HiBadgeCheck, HiExclamationCircle, HiLightningBolt, HiRefresh } from "react-icons/hi";

import InventoryCard from "../components/inventorycard";
import FeedItem from "../components/feedItem";
import ProcurementDrawer from "../components/procurementdrawer"; // 2. Import your drawer

export default function Home() {
    // 3. Create the state to manage the drawer visibility
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Helper function to open the drawer
    const handleOpenDrawer = () => setIsDrawerOpen(true);

    return (
        <div className="p-8 bg-white min-h-screen relative">

            {/* --- TOP SECTION --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#735C00] mb-1">
                        Global Marketplace
                    </p>
                    <h1 className="text-4xl font-extrabold text-[#013220] tracking-tight">
                        WHOLESALE INVENTORY
                    </h1>
                </div>
                <div className="flex gap-3">
                    <Button color="light" className="rounded-none! border-gray-300 uppercase text-xs font-bold px-2">
                        Export Manifest
                    </Button>
                    <Button className="rounded-none! bg-[#735C00] hover:bg-[#5e4b00] uppercase text-xs font-bold px-2">
                        Bulk Procurement
                    </Button>
                </div>
            </div>

            {/* --- CARDS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <InventoryCard
                    title="Italian Grade A Hide"
                    img="../src/assets/ItalianGradeAHide.png"
                    status="In Stock"
                    badgeColor="success"
                    icon={HiBadgeCheck}
                    // 4. Pass the trigger function to the card
                    onProcure={handleOpenDrawer}
                    prices={[
                        { units: "1 - 20 UNITS", price: "42.50 USD / UNIT" },
                        { units: "21 - 100 UNITS", price: "38.00 USD / UNIT", highlight: true },
                        { units: "100+ UNITS", price: "35.20 USD / UNIT" }
                    ]}
                />

                <InventoryCard
                    title="Arabica Green Beans"
                    img="../src/assets/ArabicaGreenBeans.png"
                    status="Premium"
                    badgeColor="warning"
                    icon={HiBadgeCheck}
                    onProcure={handleOpenDrawer}
                    prices={[
                        { units: "1 - 50 KG", price: "12.10 USD / KG" },
                        { units: "51 - 250 KG", price: "10.50 USD / KG", highlight: true },
                        { units: "250+ KG", price: "9.25 USD / KG" }
                    ]}
                />

                <InventoryCard
                    title="Precision Steel Gaskets"
                    img="../src/assets/PrecisionSteelGaskets.png"
                    status="Limited"
                    badgeColor="failure"
                    icon={HiLightningBolt}
                    onProcure={handleOpenDrawer}
                    prices={[
                        { units: "1 - 100 PCS", price: "5.40 USD / PC" },
                        { units: "101 - 500 PCS", price: "4.15 USD / PC", highlight: true },
                        { units: "500+ PCS", price: "3.80 USD / PC" }
                    ]}
                />
            </div>

            {/* --- BOTTOM SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 bg-[#F9F9F9] -mx-8 px-8 py-16">
                <div className="lg:col-span-2">
                    <h2 className="text-4xl font-bold text-[#013220] leading-[1.1] mb-8 uppercase max-w-xl">
                        Secure your supply chain infrastructure
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                        Our platform leverages direct manufacturer links to bypass traditional brokerage fees...
                    </p>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-[#735C00]">$1.2B</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                            Annual Volume
                        </span>
                    </div>
                </div>

                <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-none!">
                    <h6 className="text-[#735C00] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                        Active Quotation Feed
                    </h6>
                    <div className="space-y-8">
                        <FeedItem icon={HiRefresh} title="Leather Grade A" desc="Order #8922 processed - 400 Units" />
                        <FeedItem icon={HiRefresh} title="Steel Gaskets" desc="Inventory replenished - 5,000 Units" />
                        <FeedItem icon={HiExclamationCircle} title="Logistics Alert" desc="Port of Suez route: 2-day delay expected" />
                    </div>
                </div>
            </div>

            {/* 5. PLACE THE DRAWER HERE */}
            <ProcurementDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </div>
    );
}