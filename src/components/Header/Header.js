import React from 'react'
import Search from "../Search/Search";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="brand-search">
                <h5>send <span>freight</span></h5>
                <Search />
            </div>
            <div className="btnGroup">
                <Button btnClass="btnRequest" btnText="Request Quote" />
                <Button btnClass="btnShipment" btnText="Book Shipment" />
            </div>
        </div>
    )
}

export default Header
