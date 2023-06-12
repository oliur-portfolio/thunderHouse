"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isToggledMenu, setIsToggledMenu] = useState(false);

    const pathname = usePathname();

    // Set Menu Items
    const menuItems = [
        { label: "Home", link: "/" },
        { label: "insights", link: "/insights" },
        { label: "legacy", link: "/legacy" },
        { label: "competencies", link: "/competencies" },
        { label: "contact", link: "/contact" },
    ];

    return (
        <header className={`header ${isToggledMenu ? "mobile__nav" : ""}`}>
            <div className="nav__container">
                <nav className="navbar">
                    <Link
                        onClick={() => setIsToggledMenu(false)}
                        href="/"
                        className="nav__logo"
                    >
                        <img src="/images/logo.png" alt="logo" />
                    </Link>

                    <button
                        onClick={() =>
                            setIsToggledMenu((prevToggle) => !prevToggle)
                        }
                        className={`navbar-toggler ${
                            isToggledMenu ? "change" : ""
                        }`}
                    >
                        <div className="toggler-btn">
                            <span className="bar bar1"></span>
                            <span className="bar bar2"></span>
                            <span className="bar bar3"></span>
                        </div>
                    </button>

                    <ul className="nav__menu">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.link}
                                    onClick={() => setIsToggledMenu(false)}
                                    className={`nav__link ${
                                        pathname === item.link
                                            ? "nav__link--active"
                                            : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
