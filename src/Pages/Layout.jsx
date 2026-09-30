import { Outlet } from "react-router-dom";
//import FooterComponent from "../components/footer/FooterComponent.jsx";
import HeaderComponent from "../components/header/HeaderComponent.jsx";


export default function Layout() {
    return (
        <>
            <HeaderComponent />

            <Outlet />

            {/*<FooterComponent />*/}
        </>
    );
}