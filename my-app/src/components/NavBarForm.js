import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"

export class NavBarForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

    handleClick = () => {
        this.setState((prevState) => ({
          isLoggedIn: !prevState.isLoggedIn,
        }));
      };

  render() {
    return (
      <div className = {css.NavBar}>
          <h1>My Gallery</h1>
          {this.state.isLoggedIn ? (
            <button onClick={this.handleClick}>Login</button>
          ) : (
            <button onClick={this.handleClick}>Submit</button>
          )}
          <form>
              <input formEncType='name'></input>
              <input formEncType='passwrod'></input>
          </form>
      </div>
    )
  }
}

export default NavBarForm