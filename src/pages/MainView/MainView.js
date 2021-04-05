import React from "react";

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

const MainView = () => {
    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <Header />
        </React.Fragment>
    )
}

export default MainView;