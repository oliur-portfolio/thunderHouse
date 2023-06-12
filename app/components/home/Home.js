"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        const processItems = document.querySelectorAll(
            ".process__list-item--fade"
        );

        gsap.to(".hero__area--fade", { opacity: 1, duration: 3 });

        gsap.from(".process__left--fade", {
            opacity: 0,
            y: 50,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".process__left--fade",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        processItems.forEach((process) => {
            gsap.from(process, {
                opacity: 0,
                duration: 0.6,
                filter: "blur(6px)",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: process,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        });
    }, []);

    return (
        <>
            {/* Hero Area */}
            <section className="hero__area hero__area--fade">
                <div className="hero__bg"></div>

                <div className="container">
                    <div className="hero">
                        <div className="hero__content">
                            <h1>
                                Bringing Significant Innovations to Fruition.
                                <span> Faster & More Cost Effectively.</span>
                            </h1>
                            <p>
                                Thunderhouse LLC is a Venture Group dedicated to
                                bringing significant innovations to fruition.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hero__images-wrapper">
                    <div className="hero__images">
                        <div className="single__hero-image">
                            <img src="/images/hero-1.webp" alt="hero" />
                        </div>

                        <div className="single__hero-image">
                            <img src="/images/hero-2.webp" alt="hero" />
                        </div>

                        <div className="single__hero-image">
                            <img src="/images/hero-3.webp" alt="hero" />
                        </div>

                        <div className="single__hero-image">
                            <img src="/images/hero-4.webp" alt="hero" />
                        </div>

                        <div className="single__hero-image">
                            <img src="/images/hero-5.webp" alt="hero" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Area */}

            {/* Process Area */}
            <section className="process__area">
                <div className="container">
                    <div className="process">
                        <div className="process__left process__left--fade">
                            <h2>
                                The #1 Challenge of all Organizations Is
                                Sustainable Growth in Value
                            </h2>

                            <h2>Innovation Drives Sustainable Growth</h2>

                            <h2>
                                The Growth Imperative is Greater Today Than
                                Ever!
                            </h2>
                        </div>
                        <div className="process__right">
                            <div className="process__list">
                                <div className="process__list-item process__list-item--fade">
                                    <img
                                        src="/images/process-icon-2.svg"
                                        alt="icon"
                                    />
                                    <h3>How We Think</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Explicabo, corporis
                                        at! Cumque asperiores esse inventore
                                        placeat delectus eos. Incidunt
                                        voluptates porro, optio eveniet
                                        explicabo voluptate atque totam.
                                    </p>
                                </div>

                                <div className="process__list-item process__list-item--fade">
                                    <img
                                        src="/images/process-icon-2.svg"
                                        alt="icon"
                                    />
                                    <h3>What We Do</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Explicabo, corporis
                                        at! Cumque asperiores esse inventore
                                        placeat delectus eos. Incidunt
                                        voluptates porro, optio eveniet
                                        explicabo voluptate atque totam.
                                    </p>
                                </div>

                                <div className="process__list-item process__list-item--fade">
                                    <img
                                        src="/images/process-icon-2.svg"
                                        alt="icon"
                                    />
                                    <h3>How We Work</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Explicabo, corporis
                                        at! Cumque asperiores esse inventore
                                        placeat delectus eos. Incidunt
                                        voluptates porro, optio eveniet
                                        explicabo voluptate atque totam.
                                    </p>
                                </div>

                                <div className="process__list-item process__list-item--fade">
                                    <img
                                        src="/images/process-icon-2.svg"
                                        alt="icon"
                                    />
                                    <h3>Who We Are</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Explicabo, corporis
                                        at! Cumque asperiores esse inventore
                                        placeat delectus eos. Incidunt
                                        voluptates porro, optio eveniet
                                        explicabo voluptate atque totam.
                                    </p>
                                </div>

                                <div className="process__list-item process__list-item--fade">
                                    <img
                                        src="/images/process-icon-2.svg"
                                        alt="icon"
                                    />
                                    <h3>Our Legacy</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Explicabo, corporis
                                        at! Cumque asperiores esse inventore
                                        placeat delectus eos. Incidunt
                                        voluptates porro, optio eveniet
                                        explicabo voluptate atque totam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process Area */}
        </>
    );
};

export default Home;
