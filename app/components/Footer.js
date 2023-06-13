"use client";

import React, { useEffect } from "react";
import Blog from "./Blog";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const pathname = usePathname();

    useEffect(() => {
        const projectArea = document.querySelectorAll(
            ".projects__area .section__heading, .projects"
        );

        projectArea.forEach((project) => {
            gsap.from(project, {
                opacity: 0,
                duration: 0.8,
                filter: "blur(6px)",
                ease: "power2.out",
                stagger: 0.4,
                scrollTrigger: {
                    trigger: project,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        });
    }, [pathname]);

    return (
        <>
            {/* Projects Area */}
            <section className="projects__area">
                <div className="container">
                    <div className="section__heading">
                        <h2>Industries & Projects</h2>
                    </div>

                    <div className="projects">
                        <Blog
                            title="MarCom Spectrum"
                            imgUrl="/images/project-1.jpg"
                            imgAlt="MarCom Spectrum"
                        />

                        <Blog
                            title="NextGen MarCom"
                            imgUrl="/images/project-2.jpg"
                            imgAlt="NextGen MarCom"
                        />

                        <Blog
                            title="Marketing Communications Technologies"
                            imgUrl="/images/project-3.jpg"
                            imgAlt="Marketing Communications"
                        />
                    </div>
                </div>
            </section>
            {/* Projects Area */}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p>
                            © {new Date().getFullYear()} ThunderHouse. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
            {/* Footer */}
        </>
    );
};

export default Footer;
