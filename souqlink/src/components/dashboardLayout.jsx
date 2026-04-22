import { Avatar, Dropdown, DropdownHeader, DropdownItem, Navbar, TextInput, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaArchive, FaFileSignature, FaGavel, FaSearch, FaStore } from "react-icons/fa";
import { FaBarsStaggered, FaGear } from "react-icons/fa6";
import { useState } from "react";
import { IoIosExit } from "react-icons/io";

const navbartheme = {
    root: {
        base: "!rounded-none !bg-white !border-none !flex !justify-between !items-center",
        inner: {
            base: "!mx-auto !w-full !flex !flex-wrap !items-center !justify-between md:!justify-end md:!gap-10"
        }
    },
}

const sidebartheme = {
    root: {
        // Added flex and flex-col to allow pushing items to the bottom
        inner: "!rounded-none !bg-[#F3F4F5] !border-none !text-black flex flex-col h-full",
    },
    item: {
        base: "!text-black hover:!bg-white hover:!text-[#735C00] !text-xl",
    },
}

export default function Dashboardlayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Sidebar with sliding animation */}
            <div className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Sidebar className="h-screen shrink-0" theme={sidebartheme}>
                    <div className="flex justify-end p-2 md:hidden">
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <IoIosExit className="w-8 h-8 text-black" />
                        </button>
                    </div>

                    <SidebarLogo className="pt-2">
                        <span className="text-[#013220] font-bold text-2xl uppercase"> SouqLink </span>
                    </SidebarLogo>

                    <SidebarItems className="mt-10 flex-1 flex flex-col">
                        {/* GROUP 1: Main Navigation */}
                        <SidebarItemGroup>
                            <SidebarItem as={Link} to="/" active={location.pathname === '/'}>
                                <FaStore className="inline-block me-2" /> MARKETPLACE
                            </SidebarItem>
                            <SidebarItem as={Link} to="/myinventory" active={location.pathname === '/myinventory'}>
                                <FaArchive className="inline-block me-2" /> MY INVENTORY
                            </SidebarItem>
                            <SidebarItem as={Link} to="/activebids" active={location.pathname === '/activebids'}>
                                <FaGavel className="inline-block me-2 -scale-x-100" /> ACTIVE BIDS
                            </SidebarItem>
                            <SidebarItem as={Link} to="/orderhistory" active={location.pathname === '/orderhistory'}>
                                <FaFileSignature className="inline-block me-2" /> ORDER HISTORY
                            </SidebarItem>
                        </SidebarItemGroup>

                        {/* GROUP 2: Bottom items (Settings) */}
                        {/* 'mt-auto' pushes this entire group to the bottom of the flex container */}
                        <SidebarItemGroup className="mt-auto border-t border-gray-200">
                            <SidebarItem as={Link} to="/settings" active={location.pathname === '/settings'}>
                                <FaGear className="inline-block me-2" /> SETTINGS
                            </SidebarItem>
                        </SidebarItemGroup>
                    </SidebarItems>
                </Sidebar>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar fluid theme={navbartheme}>
                    <button className="md:hidden p-2" onClick={() => setIsSidebarOpen(true)}>
                        <FaBarsStaggered className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-10 ml-auto">
                        <form className="hidden sm:block">
                            <TextInput id="search" type="text" placeholder="Search Commodities..." icon={FaSearch} theme={{ field: { input: { base: "!bg-[#E7E8E9] placeholder:!text-[#6B7280] !border-none !rounded-none !uppercase !font-bold !ps-10 !pe-20" } } }} />
                        </form>
                        <Dropdown inline arrowIcon={false} label={<Avatar alt="User" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                            theme={{ floating: { base: "!bg-white shadow-xl", item: { base: "!text-black hover:!bg-[#F3F4F5] hover:!text-[#735C00] !text-xl" }, header: "!text-black !bg-[#F3F4F5] !text-xl" } }}>
                            <DropdownHeader>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </DropdownHeader>
                            <DropdownItem as={Link} to="/">Dashboard</DropdownItem>
                            <DropdownItem as={Link} to="/settings">Settings</DropdownItem>
                            <DropdownItem as={Link} to="/login">Sign out</DropdownItem>
                        </Dropdown>
                    </div>
                </Navbar>
                <main className="flex-1 overflow-y-auto bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}