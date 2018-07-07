import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Benjamin Sivoravong</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
