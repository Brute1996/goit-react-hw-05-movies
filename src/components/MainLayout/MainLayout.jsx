import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MainLayoutWtapper } from "./MainLayoutWrapper.styled";

export const MainLayout = () => 
    <MainLayoutWtapper>
        <header>
            <NavLink className='navigation' to='/'>Home</NavLink>
            <NavLink className='navigation' to='/movies'>Movies</NavLink>
        </header>
        <main>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </main>
    </MainLayoutWtapper>

    
