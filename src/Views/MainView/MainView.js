import React from "react";

import Navbar from "../../Navbar/Navbar";
import Header from "../../Header/Header";

const MainView = () => {
    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <Header />
        </React.Fragment>
    )
}

export default MainView;