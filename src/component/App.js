import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import { Title } from "./Title";
import { IssuesPageContainer } from "./IssuesPageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <MuiThemeProvider>
          <IssuesPageContainer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
