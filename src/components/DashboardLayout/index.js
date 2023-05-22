import { Typography } from "antd"
import Navbar from "../navbar/Navbar"
import DashboardMenu from "../Dashboard/Menu"

const DashboardLayout = ({children}) => {
  return (
    <>
    {/* <Navbar /> */}
    <div style={{margin: "50px 0"}}>
        <Typography.Title style={{textAlign: "center"}} level={2}>Dashboard</Typography.Title>

        <DashboardMenu />
        {children}
    </div>

    </>
  )
}

export default DashboardLayout