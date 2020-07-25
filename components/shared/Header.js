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
        // <Link href="/">
        //   <a style={{'fontSize': '20px'}}> Home </a>
        // </Link>
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
import Link from 'next/link';


const BsNavLink =(props) =>{
  const {route, title} = props;
  return(
    <Link href={route}>
      <a className='nav-link port-navbar-brand' > {title} </a>
    </Link>
  )
}

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='port-navbar port-default absolute' color="transparent" dark expand="md">
        <NavbarBrand className='port-navbar-brand' href="/">Rahat Hassan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className='port-navbar-item'>
              <BsNavLink route="/" title="Home"/>
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route="/about" title="About"/>
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route="/cv" title="Cv"/>
            </NavItem>


          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
