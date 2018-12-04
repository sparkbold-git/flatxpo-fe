import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import MenuHeader from "./MenuHeader";
import HomepageHeading from "../components/HomepageHeading";

export default class DesktopContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <MenuHeader>
          <HomepageHeading />
        </MenuHeader>
        {children}
      </Responsive>
    );
  }
}