import { Badge, Button, Card } from "flowbite-react";

// 1. Add onProcure to your props destructuring
export default function InventoryCard({ title, img, status, badgeColor, icon: Icon, prices, onProcure }) {
    return (
        <Card className="rounded-none! border-none! shadow-md overflow-hidden p-0 bg-white!">
            <div className="relative h-56">
                <img src={img} alt={title} className="w-full h-full object-cover" />
                <Badge color={badgeColor} className="absolute top-0 right-0 rounded-none! uppercase px-3 py-1 font-bold text-[10px]">
                    {status}
                </Badge>
            </div>
            <div className="p-2">
                <div className="flex justify-between items-center mb-6">
                    <h5 className="text-xl font-bold text-[#013220] uppercase tracking-tight">{title}</h5>
                    <Icon className="text-[#735C00] text-xl" />
                </div>
                <div className="space-y-4 mb-8">
                    {prices.map((p, i) => (
                        <div key={i} className={`flex justify-between text-xs font-bold ${p.highlight ? 'text-[#735C00]' : 'text-gray-400'}`}>
                            <span>{p.units}</span>
                            <span>{p.price}</span>
                        </div>
                    ))}
                </div>

                {/* 2. Attach the onClick handler here */}
                <Button
                    outline
                    onClick={onProcure}
                    className="w-full rounded-none! border-[#013220]! text-[#013220]! hover:bg-[#013220]! hover:text-white! font-bold uppercase py-1"
                >
                    Procure Selection
                </Button>
            </div>
        </Card>
    );
}