import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <>
            <Header />
            <ScrollRestoration />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Main;