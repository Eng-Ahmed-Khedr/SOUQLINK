import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaArchive, FaFileSignature, FaGavel, FaSearch, FaStore } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosExit } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router-dom";


const sidebartheme = {
    root: {
        inner: "!rounded-none !bg-[#F3F4F5] !border-none !text-black flex flex-col h-full",
    },
    items: {
        base: "h-full flex flex-col",
    },
    item: {
        base: "!text-black hover:!bg-white hover:!text-[#735C00] !text-xl",
        active: "!bg-white !text-black",
    },
}

const navbartheme = {
    root: {
        base: "!rounded-none !bg-white !border-none !flex !justify-between !items-center",
        inner: {
            base: "!mx-auto !w-full !flex !flex-wrap !items-center !justify-between md:!justify-end md:!gap-10"
        }
    },
}

const dropDownTheme = {
    floating: {
        base: "!bg-white shadow-xl",
        item: {
            base: "!text-black hover:!bg-[#F3F4F5] hover:!text-[#735C00] !text-xl"
        },
        header: "!text-black !bg-[#F3F4F5] !text-xl"
    }
}

export default function Dashboard() {

    const [sidebarState, setsidebarState] = useState(false);

    const activeLocation = useLocation();

    return (
        <>
            <div className="flex h-screen">
                {
                    sidebarState && (
                        <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setsidebarState(false)} />
                    )
                }
                <div className={`flex fixed left-0 z-40 inset-y-0 md:translate-x-0 md:relative transition-transform ease-in-out duration-300 ${sidebarState ? "translate-x-0" : "-translate-x-full"}`}>
                    <Sidebar className="h-screen shrink-0" theme={sidebartheme} aria-label="sidebar">
                        <SidebarItems>
                            <div className="mb-5 flex items-center pl-5 w-full justify-between">
                                <Link to={"/"} className="flex items-center hover:text-[#735C00]!">
                                    <span className="font-bold text-xl self-center ">
                                        Souq<span className="text-green-500">Link</span>
                                    </span>
                                </Link>
                                <div className="flex justify-end p-2 md:hidden">
                                    <button className="cursor-pointer" onClick={() => { setsidebarState(false) }}>
                                        <IoIosExit className="w-8 h-8 text-black" />
                                    </button>
                                </div>
                            </div>
                            <SidebarItemGroup>
                                <SidebarItem className="uppercase" as={Link} to="/" active={activeLocation.pathname === '/'}>
                                    <FaStore className="inline-block me-2" />Marketplace
                                </SidebarItem>
                                <SidebarItem className="uppercase" as={Link} to="/myinventory" active={activeLocation.pathname === '/myinventory'}>
                                    <FaArchive className="inline-block me-2" />My Inventory
                                </SidebarItem>
                                <SidebarItem className="uppercase" as={Link} to="/activebids" active={activeLocation.pathname === '/activebids'}>
                                    <FaGavel className="inline-block me-2 -scale-x-100" />Active Bids
                                </SidebarItem>
                                <SidebarItem className="uppercase" as={Link} to="/orderhistory" active={activeLocation.pathname === '/orderhistory'}>
                                    <FaFileSignature className="inline-block me-2" />Order History
                                </SidebarItem>
                            </SidebarItemGroup>


                            <SidebarItemGroup className="mt-auto!">
                                <SidebarItem className="uppercase" as={Link} to="/settings" active={activeLocation.pathname === '/settings'} >
                                    Settings
                                </SidebarItem>
                            </SidebarItemGroup>

                        </SidebarItems>
                    </Sidebar>
                </div>


                <div className="flex flex-1 flex-col overflow-hidden">
                    <Navbar fluid rounded theme={navbartheme}>
                        <button className="md:hidden p-2 cursor-pointer" onClick={() => setsidebarState(true)}>
                            <FaBarsStaggered className="w-6 h-6" />
                        </button>
                        <div className="flex gap-10 items-center ml-auto">
                            <form className="hidden sm:block">
                                <TextInput id="search" type="text" placeholder="Search Commodities..." icon={FaSearch} theme={{ field: { input: { base: "!bg-[#E7E8E9] placeholder:!text-[#6B7280] !border-none !rounded-none !uppercase !font-bold !ps-10 !pe-20" } } }} />
                            </form>
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                }
                                theme={dropDownTheme}
                            >
                                <DropdownHeader>
                                    <span className="block text-sm">Bonnie Green</span>
                                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                </DropdownHeader>
                                <DropdownItem as={Link} to="/dashboard">Dashboard</DropdownItem>
                                <DropdownItem as={Link} to="/settings">Settings</DropdownItem>
                                <DropdownDivider />
                                <DropdownItem as={Link} to="/login">Sign out</DropdownItem>
                            </Dropdown>
                        </div>
                    </Navbar>
                    <main className="flex-1 overflow-y-auto bg-gray-50">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};