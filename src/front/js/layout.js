import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Signup } from "./pages/signup";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { AddVehicle } from "./pages/addvehicle";
import { EditVehicle } from "./pages/editvehicle";
import { MyVehicles } from "./pages/myvehicles";
import { DetailVehicle } from "./pages/detailvehicle";
import { Payment } from "./pages/payment";
import { AboutUs } from "./pages/aboutus";
import { MyFavourites } from "./pages/myfavourites";
import injectContext from "./store/appContext";

const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<AddVehicle />} path="/addvehicle" />
                        <Route element={<EditVehicle />} path="/editvehicle/:id" />
                        <Route element={<MyVehicles />} path="/myvehicles" />
                        <Route element={< MyFavourites  />} path="/myfavourites" />
                        <Route element={<DetailVehicle />} path="/detailvehicle/:id" />
                        <Route element={<Payment />} path="/payment" />
                        <Route element={<AboutUs />} path="/aboutus" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
