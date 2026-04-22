import React from "react";

export default function StatCard({
    label,
    value,
    subText,
    icon: Icon,
    borderColor,
    variant = "inventory"
}) {
    // Logic: If the border is red, the card is an alert.
    const isAlert = borderColor.includes('#D42A2A');

    const baseClasses = `bg-white p-6 shadow-sm border-l-[6px] ${borderColor} !rounded-none flex flex-col justify-between`;

    return (
        <div className={`${baseClasses} ${variant === "inventory" ? "h-40" : "h-44"}`}>

            <div className="flex justify-between items-start">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {label}
                </p>
                {variant === "bids" && <Icon className="text-[#735C00] text-xl" />}
            </div>

            {/* Updated Logic: Big value turns red if isAlert is true */}
            <h3 className={`text-4xl font-extrabold my-2 ${isAlert ? 'text-[#D42A2A]' : 'text-[#013220]'}`}>
                {value}
            </h3>

            {variant === "inventory" ? (
                <div className={`flex items-center gap-1 text-[11px] font-bold ${isAlert ? 'text-[#D42A2A]' : 'text-[#735C00]'}`}>
                    <Icon className="h-4 w-4" />
                    <span>{subText}</span>
                </div>
            ) : (
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                    {subText}
                </p>
            )}
        </div>
    );
}