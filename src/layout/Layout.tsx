import { Outlet } from "react-router"
import Nav from "../components/nav/Nav"

interface IProps {}

const Layout = ({} : IProps) => {

  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}
export default Layout