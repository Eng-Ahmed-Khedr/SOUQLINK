import { useState } from "react";
import { Drawer, Button, Label, Checkbox } from "flowbite-react";
import { HiX, HiPlus, HiMinus } from "react-icons/hi";

export default function ProcurementDrawer({ isOpen, setIsOpen }) {
    const [quantity, setQuantity] = useState(125);

    return (
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            position="right"
            className="w-full md:w-112.5 bg-[#F3F4F5]! p-0 rounded-none!"
        >
            {/* --- HEADER --- */}
            <div className="bg-[#013220] p-6 text-white flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-bold uppercase tracking-tight">New Procurement Order</h2>
                    <p className="text-[10px] text-emerald-400 font-bold uppercase mt-1">Item ID: SL-LTH-001</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:text-emerald-400 transition-colors">
                    <HiX className="h-6 w-6" />
                </button>
            </div>

            <div className="p-8 space-y-8">
                {/* --- PRODUCT INFO --- */}
                <section>
                    <p className="text-[10px] font-bold text-[#735C00] uppercase tracking-widest mb-2">Product Name</p>
                    <h3 className="text-2xl font-extrabold text-[#013220] uppercase">Italian Grade A Hide</h3>
                    <p className="text-xs text-gray-500 mt-2 font-medium">
                        Thickness: 1.4mm | Tanning: Vegetable | Finish: Semi-Aniline
                    </p>
                </section>

                {/* --- QUANTITY SELECTOR --- */}
                <section>
                    <p className="text-[10px] font-bold text-[#735C00] uppercase tracking-widest mb-4">Order Quantity (Units)</p>
                    <div className="flex items-stretch h-14">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="px-6 border border-gray-300 bg-white hover:bg-gray-100 rounded-none!"
                        >
                            <HiMinus />
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                            className="w-full text-center border-y border-gray-300 focus:ring-0 focus:border-gray-300 font-bold text-lg"
                        />
                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="px-6 border border-gray-300 bg-white hover:bg-gray-100 rounded-none!"
                        >
                            <HiPlus />
                        </button>
                    </div>
                </section>

                {/* --- PRICE TIER CARD --- */}
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-none!">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Applied Wholesale Tier</p>
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-[#013220] uppercase">Unit Price:</span>
                        <span className="text-3xl font-black text-[#735C00]">35.20 USD</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold mt-4 italic">* TIER 3 DISCOUNT (100+ UNITS) APPLIED</p>
                </div>

                {/* --- TOTALS --- */}
                <div className="space-y-2 pt-4">
                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
                        <span>Subtotal</span>
                        <span>4,400.00 USD</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase border-b border-gray-200 pb-4">
                        <span>Industrial Logistics Fee</span>
                        <span>125.00 USD</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-4">
                        <span className="text-lg font-black text-[#013220] uppercase">Total Payable</span>
                        <span className="text-4xl font-black text-[#013220]">4,525.00 USD</span>
                    </div>
                </div>

                {/* --- FOOTER CTA --- */}
                <div className="pt-10 space-y-4">
                    <div className="flex items-center gap-2">
                        <Checkbox id="terms" className="rounded-none! text-[#013220]! focus:ring-0" />
                        <Label htmlFor="terms" className="text-[9px] font-bold text-gray-500 uppercase tracking-tight cursor-pointer">
                            I agree to the industrial procurement standards & terms.
                        </Label>
                    </div>
                    <Button className="w-full bg-[#013220]! hover:bg-[#0a4630]! rounded-none! py-2 uppercase font-black tracking-widest text-lg">
                        Finalize Procurement
                    </Button>
                </div>
            </div>
        </Drawer>
    );
}   