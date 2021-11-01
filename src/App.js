import React from "react"
import { Switch, Link } from "react-router-dom"
import Navbar from "./Navbar.js"
import Profile from "./Profile.js"
import Public from "./Public.js"
import Auth from "./Auth.js"

export default function App(){
    return (
        <div>
            <Navbar />
            <Switch>
                <Route />
                <Route />
                <Route />
            </Switch>
        </div>
    )
}