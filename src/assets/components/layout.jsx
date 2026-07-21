import { Outlet } from "react-router-dom"
import Heading from "./heading.jsx"

const Layout = () => {
    return (
        <div>
            <Heading />

            <Outlet />
        </div>
    )
}

export default Layout