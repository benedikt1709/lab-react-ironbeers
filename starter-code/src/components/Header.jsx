import React, { useState  } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
         } from 'reactstrap';
import { Link } from "react-router-dom";

    const Header = (props) => {
        const [isOpen, setIsOpen] = useState(false); // Klären
        const toggle = () => setIsOpen(!isOpen);

    return (
            <div style={{marginBottom: 20}}>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Ironbeer</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink>
                        <Link style={{color: "black"}} to="/">Home</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                        <Link style={{color: "black"}} to="/allbeers">All Beers</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                        <Link style={{color: "black"}} to="/newbeer">New Beer</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                        <Link style={{color: "black"}} to="/randombeer">Random Beer</Link>
                        </NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
            );
    }

export default Header;