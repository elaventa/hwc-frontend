import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

const DashboardMenu = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [current, setCurrent] = useState();
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };


    useEffect(() => {
        setCurrent(pathname)
    }, [pathname])
    

    console.log(pathname)


    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            theme="dark"
        >
            <Menu.Item
                onClick={() => router.push("/dashboard")}
                key="/dashboard"
            >
                Registrations
            </Menu.Item>

            <Menu.Item
                onClick={() => router.push("/dashboard/sponsor")}
                key="/dashboard/sponsor"
            >
                Sponsor
            </Menu.Item>

            <Menu.Item
                onClick={() => router.push("/dashboard/competition")}
                key="/dashboard/competition"
            >
                Competition
            </Menu.Item>
        </Menu>
    );
};

export default DashboardMenu;
