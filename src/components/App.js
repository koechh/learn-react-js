import React, { Component } from "react";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
  static contextType = LanguageStore;

  render() {

    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector/>

          <ColorContext.Provider value="black">
            <UserCreate/>
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;