
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Nav.css';

export const Dashboard = () => {

    return (
 <div class="header_section">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="logo"><a href="/">Elite Tech</a></div>
            </div>
            <div class="col-md-9">
                <div class="menu_text">

                    <Nav
                        // activeKey="/home"
                        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        // className="navbar navbar-expand-sm"
                    >
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/services">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/culture">Culture</Nav.Link>
                        </Nav.Item>

                        {/* <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled for now
                            </Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                    <span class="navbar-toggler-icon"></span>
                    <span onclick="openNav()"><img src="images/toogle-icon.png" class="toggle_menu" /></span>
                </div>

            </div>
        </div>
    </div>
</div>

    


)
}


export default Dashboard;