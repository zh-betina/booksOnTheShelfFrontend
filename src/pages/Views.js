import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import fire from '../firebase/fire';
import MainView from "./MainView/MainView";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Bookcases from "./Bookcases/Bookcases";

import "./Views.scss";


const Views = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    fire.auth().onAuthStateChanged((user) => {
        return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    console.log(isLoggedIn);
    return (
        <React.Fragment>
            {!isLoggedIn
                ? (
                    <>
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/" exact component={MainView} />
                            <Switch>
                                <Route path="/profile">
                                    <Login />
                                </Route>
                                <Route path="/bookcases">
                                    <Login />
                                </Route>
                            </Switch>
                    </>
                )
                :
                (
                    <>
                            <Switch>
                                <Route path="/login">
                                    <Profile />
                                </Route>
                                <Route path="/signup">
                                    <Profile />
                                </Route>
                                <Route path exact ="/">
                                    <Profile />
                                </Route>
                            </Switch>
                        <Route path="/bookcases" component={Bookcases} />
                        <Route path="/profile" component={Profile} />
                    </>
                )
            }
        </React.Fragment >
    )
}


export default Views;