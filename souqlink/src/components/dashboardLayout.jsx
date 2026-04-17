import { Avatar, Dropdown, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";

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
        inner: "!rounded-none !bg-[#F3F4F5] !border-none !text-black ",
    },
    item: {
        base: "!text-black hover:!bg-white hover:!text-[#735C00] !text-xl",
    },
}

export default function Dashboardlayout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <>
            <div className="flex h-screen overflow-hidden">

                {isSidebarOpen && (
                    <div className="fixed inset-0 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)} />
                )}

                {/* Start  sidebar */}
                <div className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-400 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <Sidebar className="h-screen shrink-0 overflow-hidden" theme={sidebartheme} aria-label="Sidebar with logo branding example">
                        <div className="flex justify-end p-2 md:hidden">
                            <button onClick={() => setIsSidebarOpen(false)}>
                                <IoIosExit className="w-6 h-6" />
                            </button>
                        </div>
                        <SidebarLogo className="pt-2">
                            <span className="text-[#013220] font-bold text-2xl uppercase"> SouqLink </span>
                        </SidebarLogo>
                        <SidebarItems className="mt-10">
                            <SidebarItemGroup>
                                <SidebarItem as={Link} to="/">
                                    <FaStore className="inline-block me-2" />
                                    MARKETPLACE
                                </SidebarItem>
                                <SidebarItem as={Link} to="/my-inventory">
                                    <FaArchive className="inline-block me-2" />
                                    MY INVENTORY
                                </SidebarItem>
                                <SidebarItem as={Link} to="/active-bids" >
                                    <FaGavel className="inline-block me-2 -scale-x-100" />
                                    ACTIVE BIDS
                                </SidebarItem>
                                <SidebarItem as={Link} to="/order-history" >
                                    <FaFileSignature className="inline-block me-2" />
                                    ORDER HISTORY
                                </SidebarItem>
                                <SidebarItem as={Link} to="/settings" className="absolute bottom-0 ps-2 pe-24 mb-2">
                                    <FaGear className="inline-block me-2" />
                                    SETTINGS
                                </SidebarItem>
                            </SidebarItemGroup>
                        </SidebarItems>
                    </Sidebar>
                </div>
                {/* End sidebar */}

                {/* Start main content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                    <Navbar fluid theme={navbartheme}>

                        <button className="md:hidden p-2" onClick={() => {
                            setIsSidebarOpen(true);
                            console.log(isSidebarOpen);
                        }}>
                            <FaBarsStaggered className="w-6 h-6" />
                        </button>
                        <form className="hidden sm:block">
                            <TextInput id="search" type="text" placeholder="Search Comodoties..." icon={FaSearch} theme={{ field: { input: { base: "!bg-[#E7E8E9] placeholder:!text-[#6B7280] !border-none !rounded-none !uppercase !font-bold !ps-10 !pe-20" } } }} />
                        </form>
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            }
                            theme={{
                                floating: {
                                    base: "!bg-white",
                                    item: {
                                        base:
                                            "!text-black !bg-[#F3F4F5] hover:!bg-white hover:!text-[#735C00] !text-xl",
                                    },
                                    header: "!text-black !bg-[#F3F4F5] !text-xl"
                                },


                            }}
                        >
                            <DropdownHeader>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </DropdownHeader>
                            <DropdownItem as={Link} to="/dashboard">Dashboard</DropdownItem>
                            <DropdownItem as={Link} to="/settings">Settings</DropdownItem>
                            <DropdownItem as={Link} to="/signin">Sign out</DropdownItem>
                        </Dropdown>



                    </Navbar>

                    <main className="flex-1 overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
                {/* End main content */}
            </div>
        </>
    )
}