import React from "react";
import { Redirect } from "react-router-dom";
import chat from "../lib/chat";
import spinner from "../logo.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isAuthenticated: false,
      user: null,
      isSubmitting: false,
      errorMessage: ""
    };
  }

  onSubmit = e => {
    if (this.state.username !== "") {
      e.preventDefault();
      this.login();
    }
  };

  login = () => {
    this.toggleIsSubmitting();
    chat
      .login(this.state.username)
      .then(user => {
        this.setState({
          user,
          isAuthenticated: true
        });
      })
      .catch(error => {
          this.setState({
            errorMessage: "Please enter a valid username"
          });
          this.toggleIsSubmitting();
          console.log(error);
      });
  };

  toggleIsSubmitting = () => {
    this.setState(prevState => ({
      isSubmitting: !prevState.isSubmitting
    }));
  };

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: "/chat",
            state: { user: this.state.user }
          }}
        />
      );
    }

    return (
      <div className="App">
        <h1>COMET CHAT</h1>
        <p>Create an account through your CometChat dashboard or login with one of our test users, superhero1, superhero2, etc.</p>
        <form className="form" onSubmit={this.onSubmit}>
          <input onChange={this.handleInputChange} type="text" />
          <span className="error">{this.state.errorMessage}</span>
          {this.state.isSubmitting ? (
            <img src={spinner} alt="Spinner component" className="App-logo" />
          ) : (
            <input
              type="submit"
              disabled={this.state.username === ""}
              value="LOGIN"
            />
          )}
        </form>
      </div>
    );
  }
}

export default Login;
