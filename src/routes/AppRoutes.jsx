import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Redirect, Route, Switch } from "react-router-dom";
import PagesUser from "../../src/pages/PageUser/PageUser";
import Home from '../pages/Home/Home';
import Inbox from '../pages/Inbox/Inbox';
import Explore from '../pages/Explore/Explore';

const AppRoutes = (props) => {
    const{cards, toggleAdded, toggleFavorite, toggleIsOpenModal } = props
    return (     
    <BrowserRouter>
    <Switch>
    <Redirect exact from="/" to="home" />
        <Route
        exact
        path="/home"
        render={() => (
        <Home
        toggleAdded={toggleAdded}
        toggleFavorite={toggleFavorite}
        cards={cards}
        />
        )}
        />
    <Route 
        path="/direct" 
        render={() => (
        <Inbox
        cards={cards}
        toggleAdded={toggleAdded}
        />
        )}
        /> 
        <Route 
        path="/garely"
        render={() => (
           <Explore
           cards={cards} 
           toggleAdded={toggleAdded}
           />
        )}
        /> 
        <Route
        exact
        path="/:userId"
        render={(routerProps) => (
            <PagesUser
            toggleIsOpenModal={toggleIsOpenModal}
            toggleAdded={toggleAdded}
            toggleFavorite={toggleFavorite}
            {...routerProps}
            />
        )}
        /> 
    </Switch>
    </BrowserRouter>
    )
}

export default AppRoutes;
