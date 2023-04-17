import { Typography } from "antd"
import Navbar from "../navbar/Navbar"

const DashboardLayout = ({children}) => {
  return (
    <>
    {/* <Navbar /> */}
    <div style={{margin: "50px 0"}}>
        <Typography.Title style={{textAlign: "center"}} level={2}>Dashboard</Typography.Title>
        {children}
    </div>

    </>
  )
}

export default DashboardLayout