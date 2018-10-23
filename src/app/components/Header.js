/**
 * Created by Talel on 2018-10-20.
 */

import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};