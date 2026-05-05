import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const inputTheme = {
    field: {
        input: {
            base: "!bg-white !border-gray-300 !rounded-none !p-3 !text-[#013220] font-bold focus:!ring-1 focus:!ring-[#013220] focus:!border-[#013220]"
        }
    }
}

const labelTheme = {
    root: {
        base: "!text-md !font-black !text-[#735C00] !uppercase !tracking-widest"
    }
}

export default function Login() {

    
    return (
        <>
            <div className="relative w-full h-screen bg-[#013220] flex flex-col items-center justify-center">
                <div className="background absolute inset-0 flex items-center justify-center overflow-hidden">
                    <h1 className="text-[25vw] font-bold text-white/20 tracking-tighter">SouqLink</h1>
                </div>
                <div className="relative z-10 text-center uppercase mb-10">
                    <h2 className="text-4xl font-bold text-white">
                        Industrial Forge
                    </h2>
                    <div className="flex items-center justify-center">
                        <div className="bg-[#735C00] w-10 h-1"></div>
                        <span className="uppercase text-[#735C00] mx-5 ">Secure Terminal Access</span>
                        <div className="bg-[#735C00] w-10 h-1"></div>
                    </div>
                </div>
                <div className="LoginForm relative bg-white w-fit border-t-6 border-[#735C00] p-20 shadow-xl rounded-md">
                    <h2 className="uppercase text-2xl font-bold">
                        Operator Login
                    </h2>
                    <p className="text-gray-400 text-[10px] mb-10">
                        ENTER CREDENTIALS TO ACCESS THE SOUQLINK ECOSYSTEM.
                    </p>
                    <form className="flex max-w-md flex-col gap-4">
                        <div className="mb-8">
                            <div className="mb-2 block">
                                <Label htmlFor="id" theme={labelTheme}>ID</Label>
                            </div>
                            <TextInput id="id" type="text" placeholder="ID-0000000" required shadow theme={inputTheme} />
                        </div>
                        <div className="mb-8">
                            <div className="mb-2 block">
                                <Label htmlFor="password2" theme={labelTheme}>Access Protocol</Label>
                            </div>
                            <TextInput id="password2" type="password" placeholder="••••••••" required shadow theme={inputTheme} />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="agree" className="bg-[#364153] rounded-none" />
                            <Label htmlFor="agree" className="flex" theme={labelTheme}>
                                Maintain Persistent Session
                            </Label>
                        </div>
                        <Button type="submit" className="!text-white !uppercase !font-bold !bg-[#013220] tracking-widest !rounded-none hover:!bg-[#013220]/80 transition-colors duration-300">Initiate Connection</Button>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center mt-8 ">
                            New Entity?
                        </p>
                        <Button type="submit" className="!text-[#735C00] !uppercase !font-bold !bg-white !rounded-none border hover:!bg-[#735C00] hover:!border-[#735C00] hover:!text-white transition-colors duration-300">Request System Access</Button>
                    </form>
                </div>
                <div className="bottomSection flex w-full max-w-md justify-between items-center text-[#4D6D61]">
                    <div className="flex">
                        <Button as={Link} to={"/techspecs"} className="hover:!text-[#7da798] transition-colors duration-300">
                            Tech Specs
                        </Button>
                        <Button as={Link} to={"/support"} className="hover:!text-[#7da798] transition-colors duration-300">
                            Support
                        </Button>
                    </div>
                    <span className="font-bold text-[#735C00]">v2.4.0-Stable</span>
                </div>
            </div>
        </>
    );
}