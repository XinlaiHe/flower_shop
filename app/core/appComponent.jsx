"use strict";

import React from "react";

class AppComponent extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
      return (
              <div>
                  { this.props.children }
              </div>
             )
  }
}

export default AppComponent;
