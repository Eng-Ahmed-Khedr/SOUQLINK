import { Button, TextInput, Checkbox, Label } from "flowbite-react";

export default function Login() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#013220] p-4 overflow-hidden">

            {/* --- BACKGROUND WATERMARK --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[25vw] font-black text-white opacity-[0.02] tracking-tighter">
                    SOUQLINK
                </h1>
            </div>

            {/* --- TOP BRANDING --- */}
            <div className="relative z-10 text-center mb-8">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                    Industrial Forge
                </h2>
                <div className="flex items-center justify-center gap-4 mt-1">
                    <div className="h-0.5 w-8 bg-[#735C00]"></div>
                    <p className="text-[10px] font-bold text-[#735C00] uppercase tracking-[0.3em]">
                        Secure Terminal Access
                    </p>
                    <div className="h-0.5 w-8 bg-[#735C00]"></div>
                </div>
            </div>

            {/* --- LOGIN CARD --- */}
            <div className="relative z-10 w-full max-w-md bg-white rounded-none! border-t-[6px] border-[#735C00] shadow-2xl p-10">

                <header className="mb-10">
                    <h1 className="text-2xl font-black text-[#013220] uppercase tracking-tight">
                        Operator Login
                    </h1>
                    <p className="text-[10px] font-bold text-gray-400 mt-2 leading-relaxed max-w-50">
                        ENTER CREDENTIALS TO ACCESS THE SOUQLINK ECOSYSTEM.
                    </p>
                </header>

                <form className="space-y-8">
                    {/* Operator Identity */}
                    <div className="space-y-2">
                        <Label className="text-[10px] font-black text-[#735C00] uppercase tracking-widest">
                            Operator Identity
                        </Label>
                        <TextInput
                            id="id"
                            placeholder="ID-000000"
                            required
                            theme={{
                                field: {
                                    input: {
                                        base: "!bg-white !border-gray-300 !rounded-none !p-3 !text-[#013220] font-bold focus:!ring-1 focus:!ring-[#013220] focus:!border-[#013220]"
                                    }
                                }
                            }}
                        />
                    </div>

                    {/* Access Protocol (Password) */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label className="text-[10px] font-black text-[#735C00] uppercase tracking-widest">
                                Access Protocol
                            </Label>
                            <button type="button" className="text-[9px] font-black text-gray-400 uppercase hover:text-[#735C00] transition-colors">
                                Lost Code?
                            </button>
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            theme={{
                                field: {
                                    input: {
                                        base: "!bg-white !border-gray-300 !rounded-none !p-3 !text-[#013220] font-bold focus:!ring-1 focus:!ring-[#013220] focus:!border-[#013220]"
                                    }
                                }
                            }}
                        />
                    </div>

                    {/* Persistent Session */}
                    <div className="flex items-center gap-3 py-2">
                        <Checkbox
                            id="remember"
                            className="h-5 w-5 rounded-none! text-[#013220]! focus:ring-0! border-gray-300"
                        />
                        <Label htmlFor="remember" className="text-[10px] font-bold text-gray-500 uppercase tracking-tight cursor-pointer">
                            Maintain Persistent Session
                        </Label>
                    </div>

                    {/* Primary Action Button */}
                    <Button
                        className="w-full bg-[#013220]! hover:bg-[#0a4630]! rounded-none! py-1 uppercase font-black tracking-widest text-sm"
                    >
                        Initialize Connection
                    </Button>
                </form>

                {/* Secondary Action */}
                <div className="mt-12 text-center space-y-4">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        New Entity?
                    </p>
                    <Button
                        outline
                        className="w-full rounded-none! border-[#735C00]! text-[#735C00]! hover:bg-[#735C00]! hover:text-white! uppercase font-black tracking-widest text-xs py-1"
                    >
                        Request System Access
                    </Button>
                </div>
            </div>

            {/* --- PAGE FOOTER --- */}
            <footer className="mt-10 flex justify-between w-full max-w-md text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
                <div className="flex gap-4">
                    <button className="hover:text-white transition-colors">Tech Specs</button>
                    <button className="hover:text-white transition-colors">Support</button>
                </div>
                <span>v2.4.0-Stable</span>
            </footer>
        </div>
    );
}