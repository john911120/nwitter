// import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "D:/Project/nwitter/src/routes/Auth";
import Home from "D:/Project/nwitter/src/routes/Home";
// import Auth from "../routes/Auth";
// import Home from "../routes/Home";


const AppRouter = ({isLoggedIn}) =>{
   // const [isLoggedIn, setIsLoggedIn] = useState(false);
   // const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
        <Router>
            <Switch>
                {isLoggedIn ?(
                 <Route exact path="/">
                     <Home />
                 </Route>   
                ) : (
                    <Route exact path="/">
                        <Auth />
                </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;