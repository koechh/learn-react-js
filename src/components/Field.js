import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const { language } = this.context;
    return (
      <div className="ui field">
        <label>
          {language === 'english' ? 'Name' : 'Naam'}
        </label>
        <input/>
      </div>
    )
  }
}

export default Field;