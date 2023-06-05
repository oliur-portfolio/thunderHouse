"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
    const [isToggledMenu, setIsToggledMenu] = useState(false);

    return (
        <header className={`header ${isToggledMenu ? "mobile__nav" : ""}`}>
            <div className="nav__container">
                <nav className="navbar">
                    <Link href="/" className="nav__logo">
                        <img src="/images/logo.png" alt="logo" />
                    </Link>

                    <button
                        onClick={() =>
                            setIsToggledMenu((prevToggle) => !prevToggle)
                        }
                        class={`navbar-toggler ${
                            isToggledMenu ? "change" : ""
                        }`}
                    >
                        <div class="toggler-btn">
                            <span class="bar bar1"></span>
                            <span class="bar bar2"></span>
                            <span class="bar bar3"></span>
                        </div>
                    </button>

                    <ul className="nav__menu">
                        <li>
                            <Link
                                href="/"
                                className="nav__link nav__link--active"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/philosophy" className="nav__link">
                                Philosophy
                            </Link>
                        </li>
                        <li>
                            <Link href="/legacy" className="nav__link">
                                Legacy
                            </Link>
                        </li>
                        <li>
                            <Link href="/process" className="nav__link">
                                process
                            </Link>
                        </li>
                        <li>
                            <Link href="/competencies" className="nav__link">
                                competencies
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="nav__link">
                                contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
