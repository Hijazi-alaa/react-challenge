import React from "react";
import css from "./css/NavBarSimple.module.css"
class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message : "Hello, guest!",
            loginButton : "log in"
        }
    }


    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("previous State:", prevState)
            console.log("Previous props:", prevProps)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                loginButton: prevState.loginButton === "log in" ? "log out " : "log in",
            }
        })
    }

    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <span>{this.state.message}</span>
            <button onClick={() => this.handleClick()}>{this.state.loginButton}</button>
        </div>
        )
    }
}

export default NavBarSimple;