import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => 
    <>
        <header>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
        </header>
        <Outlet />
    </>
