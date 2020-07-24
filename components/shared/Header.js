// import React from 'react';
// import Link from 'next/link';
//
//
//
// class Header extends React.Component {
//
//
//   render() {
//
//     return (
//       <React.Fragment>
//
//         <Link href="/">
//           <a style={{'fontSize': '20px'}}> Home </a>
//         </Link>
//
//         <Link href="/about">
//           <a> About </a>
//         </Link>
//
//         <Link href="/portfolios">
//           <a> Portfolio </a>
//         </Link>
//
//         <Link href="/blogs">
//           <a> Blog </a>
//         </Link>
//
//         <Link href="/cv">
//           <a> CV </a>
//         </Link>
//         <style jsx>
//           {
//           `
//           a {
//             font-size: 20px;
//           };
//           .customClass {
//             color: red;
//           }
//           `
//           }
//         </style>
//       </React.Fragment>
//     )
//   }
// }
//
// export default Header;




import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
