import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {( { language, onLanguageChange } ) =>
          <div>
            Select a language:
            <i className="flag us" onClick={() => onLanguageChange('english')} />
            <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
          </div>
        }
      </LanguageContext.Consumer>
    );
  }
}

export default LanguageSelector;