import React from "react";
import { Button, TextInput, Label, Checkbox } from "flowbite-react";
import { HiOutlineBadgeCheck, HiOutlineShieldCheck } from "react-icons/hi";

export default function Settings() {
    return (
        <div className="relative p-8 bg-white min-h-screen overflow-hidden">

            {/* --- BACKGROUND WATERMARK --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <h1 className="text-[20vw] font-black text-gray-50 opacity-[0.03] rotate-[-5deg] tracking-tighter">
                    SETTINGS
                </h1>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* --- HEADER --- */}
                <header className="mb-12">
                    <p className="text-[10px] font-bold text-[#735C00] uppercase tracking-[0.2em] mb-1">
                        System Configuration
                    </p>
                    <h1 className="text-6xl font-black text-[#013220] tracking-tighter mb-4">
                        SETTINGS
                    </h1>
                    <p className="text-sm text-gray-500 max-w-xl leading-relaxed font-medium">
                        Adjust your operational parameters, security protocols, and notification relays for the SouqLink industrial network.
                    </p>
                </header>

                <div className="space-y-12 mb-24">

                    {/* --- SECTION 01: PROFILE --- */}
                    <section className="bg-[#F3F4F5] p-10 rounded-none! relative overflow-hidden">
                        {/* Decorative Background Icon */}
                        <HiOutlineBadgeCheck className="absolute -top-4 -right-4 text-gray-200/50 text-9xl rotate-12" />

                        <h2 className="text-xl font-black text-[#013220] uppercase border-b-4 border-[#013220] inline-block pb-1 mb-10">
                            01. Profile Credentials
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <SettingsInput label="Operator Full Name" value="Alexander K. Volkov" />
                            <SettingsInput label="Business Entity" value="Cairo Foundry & Metalworks" />
                        </div>
                        <SettingsInput label="Relay Email Address" value="volkov.a@cairofoundry.int" fullWidth />
                    </section>

                    {/* --- SECTION 02: ACCESS CONTROL --- */}
                    <section className="bg-white border border-gray-100 p-10 rounded-none! shadow-sm">
                        <h2 className="text-xl font-black text-[#013220] uppercase border-b-4 border-[#013220] inline-block pb-1 mb-10">
                            02. Access Control
                        </h2>

                        <div className="space-y-4">
                            <AccessRow
                                title="Encrypted Password"
                                desc="Last updated 42 days ago"
                                btnText="Rotate Keys"
                                btnColor="gold"
                            />
                            <AccessRow
                                title="Multi-Factor Authentication"
                                desc="Status: Active"
                                btnText="Configure"
                                statusIcon
                            />
                        </div>
                    </section>

                    {/* --- SECTION 03: ALERT PROTOCOLS --- */}
                    <section className="bg-[#F3F4F5] p-10 rounded-none!">
                        <h2 className="text-xl font-black text-[#013220] uppercase border-b-4 border-[#013220] inline-block pb-1 mb-10">
                            03. Alert Protocols
                        </h2>

                        <div className="space-y-10">
                            <AlertCheckbox
                                label="Market Volatility Alerts"
                                desc="Instant notification when steel or iron indices shift > 1.5%."
                                defaultChecked
                            />
                            <AlertCheckbox
                                label="Procurement Status"
                                desc="Relay updates on active bids, logistics, and bill of lading releases."
                                defaultChecked
                            />
                            <AlertCheckbox
                                label="Network Newsletter"
                                desc="Weekly digest of regional manufacturing trends and surplus inventory."
                            />
                        </div>
                    </section>
                </div>

                {/* --- FOOTER ACTIONS --- */}
                <footer className="flex justify-end items-center gap-8 border-t border-gray-200 pt-8 pb-16">
                    <Button
                        color="gray"
                        className="bg-transparent! border-none! shadow-none! text-gray-500! hover:text-[#013220]! rounded-none! uppercase font-black tracking-widest text-xs"
                    >
                        Reset Defaults
                    </Button>
                    <Button
                        className="bg-[#013220]! hover:bg-[#0a4630]! rounded-none! px-10 py-2 uppercase font-black tracking-[0.2em] text-sm"
                    >
                        Commit Changes
                    </Button>
                </footer>
            </div>
        </div>
    );
}

/* --- SUB-COMPONENTS --- */

function SettingsInput({ label, value, fullWidth = false }) {
    return (
        <div className={fullWidth ? "w-full" : ""}>
            <Label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                {label}
            </Label>
            <TextInput
                defaultValue={value}
                theme={{
                    field: {
                        input: {
                            base: "!bg-white !border-gray-300 !rounded-none !p-4 !text-[#013220] font-bold focus:!ring-1 focus:!ring-[#013220] focus:!border-[#013220]"
                        }
                    }
                }}
            />
        </div>
    );
}

function AccessRow({ title, desc, btnText, btnColor, statusIcon }) {
    return (
        <div className="flex justify-between items-center p-6 border border-gray-200 rounded-none!">
            <div className="flex items-center gap-4">
                {statusIcon && <HiOutlineShieldCheck className="text-[#013220] text-2xl" />}
                <div>
                    <h4 className="text-sm font-black text-[#013220] uppercase tracking-tight">{title}</h4>
                    <p className={`text-[11px] font-bold ${statusIcon ? 'text-emerald-600' : 'text-gray-400'}`}>
                        {desc}
                    </p>
                </div>
            </div>
            <Button
                outline
                className={`rounded-none! uppercase font-black text-[10px] tracking-widest px-4
          ${btnColor === 'gold'
                        ? 'border-[#735C00]! text-[#735C00]! hover:bg-[#735C00]! hover:text-white!'
                        : 'border-gray-300! text-gray-500! hover:bg-gray-50!'}`}
            >
                {btnText}
            </Button>
        </div>
    );
}

function AlertCheckbox({ label, desc, defaultChecked = false }) {
    return (
        <div className="flex items-start gap-4">
            <Checkbox
                defaultChecked={defaultChecked}
                className="mt-1 h-6 w-6 !rounded-none! text-[#013220]! focus:ring-0! border-gray-400!"
            />
            <div>
                <h4 className="text-sm font-black text-[#013220] uppercase tracking-tight mb-1">{label}</h4>
                <p className="text-[11px] font-medium text-gray-500 leading-relaxed max-w-md">{desc}</p>
            </div>
        </div>
    );
}