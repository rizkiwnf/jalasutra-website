import { Link, useLocation } from "react-router-dom";
import GambarLogo from "../../assets/images/Logo White.svg";
import { DASHBOARD_SIDEBAR_TOP, DASHBOARD_SIDEBAR_BOTTOM } from "../../lib/consts/navigation";
import classNames from "classnames";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";

const stylingLink = 'flex items-center gap-3 font-light hover:bg-light-blue/70 px-3 py-2 text-sm rounded-sm';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar w-60 h-screen bg-admin-blue flex flex-col py-2">
                <div className="image flex w-full justify-center items-center border-b-2 border-white">
                    <img src={GambarLogo} alt="" width={150} className="" />
                </div>
                <div className="p-3 top-sidebar flex-1 flex flex-col gap-1">
                    {DASHBOARD_SIDEBAR_TOP.map((list) => (
                        <SidebarLink key={list.key} list={list} />
                    ))}
                </div>
                <div className="bottom-sidebar p-3 flex flex-col gap-1 border-t-2 border-white">
                    {DASHBOARD_SIDEBAR_BOTTOM.map((list) => (
                        <SidebarLink key={list.key} list={list} />
                    ))}
                    <Link to="/">
                        <div className={classNames('text-red-500', stylingLink)}>
                            <span><HiMiniArrowRightOnRectangle /></span>Keluar
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

function SidebarLink({ list }) {
    const { pathname } = useLocation();

    return (
        <Link to={list.path} className={classNames(pathname === list.path ? 'bg-light-blue text-white' : 'text-white', stylingLink)}>
            <span>{list.icon}</span>
            {list.label}
        </Link>
    )
}