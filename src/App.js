import React, { useContext } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from "./Navbar.js"
import Profile from "./Profile.js"
import Public from "./Public.js"
import Auth from "./Auth.js"
import { UserContext } from "./context/UserProvider.js"

export default function App(){
	const { token, logout } = useContext(UserContext)
  return (
    <div>
      <Navbar logout={logout}/>
      <Switch>
        <Route 
          exact path="/"
          render={() => token ? <Redirect to="/profile"/> : <Auth />}
        />
        <Route 
          path="/"
          render={() => <Profile />}
        />
        <Route 
          path="/"
          render={() => <Public />}
        />
      </Switch>
    </div>
  )
}