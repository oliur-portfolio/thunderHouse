"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
    useEffect(() => {
        const contents = document.querySelectorAll(".other__fade-in");

        gsap.to(".other__hero-area", { opacity: 1, duration: 3 });

        contents.forEach((content) => {
            const elements = content.querySelectorAll(
                "h2, p, .single__content-image"
            );

            console.log(elements);

            elements.forEach((element) => {
                gsap.from(element, {
                    opacity: 0,
                    filter: "blur(6px)",
                    stagger: 0.2,
                    ease: "power2.out",
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            });
        });
    }, []);

    return (
        <section className="other__hero-area">
            <div className="other__hero-bg"></div>

            <div className="container">
                <div className="other__hero">
                    {/* Single Content */}
                    <div className="single__content">
                        <h1>Tracing Back To Benjamin Franklin</h1>

                        <p>
                            ThunderHouse traces its brand heritage to the
                            greatest of all American innovators, Benjamin
                            Franklin. His focus was the practical application of
                            science to solving everyday problems and making
                            peoples' lives better. Franklin created the postal
                            system, the lending library, the first fire
                            department, the Franklin stove, bifocals and most
                            relevant to ThunderHouse, he discovered the
                            connection between lightning and electricity.
                        </p>

                        <div className="single__content-image">
                            <img src="/images/hero-3.webp" alt="content" />
                        </div>
                    </div>
                    {/* Single Content */}

                    {/* Single Content */}
                    <div className="single__content other__fade-in">
                        <h2>
                            Invented the Lightning Rod…But No One was Buying
                        </h2>

                        <p>
                            In the mid-1700s, Franklin applied what he learned
                            from his kite-flying experiments to the invention of
                            the lightning rod, to prevent the destruction of
                            buildings and lives. But as with many innovations,
                            before and after, Franklin could not sell the
                            concept: lightning was considered a divine act and
                            interfering with it was sacrilege.
                        </p>

                        <div className="single__content-image">
                            <img src="/images/hero-1.webp" alt="content" />
                        </div>
                    </div>
                    {/* Single Content */}

                    {/* Single Content */}
                    <div className="single__content other__fade-in">
                        <h2>Tracing Back To Benjamin Franklin</h2>

                        <p>
                            Franklin was undeterred. He built a ThunderHouse, a
                            brilliant "demo" to communicate the benefit of his
                            lightning rod and break the barriers to its
                            acceptance. The "ThunderHouse" - a three-dimensional
                            wooden model house, equipped with a lightning rod,
                            hinged walls and a detachable roof. Inside, Franklin
                            placed a small charge of gunpowder.
                        </p>

                        <p>
                            When an electric charge was applied to the lightning
                            rod, electricity would pass safely through the rod
                            and grounding wire to the earth with no effect.
                            However, when a wooden block was positioned to break
                            the grounding circuit, a spark across the block
                            would ignite the gunpowder with convincing and
                            entertaining effects - the roof and walls literally
                            blew off!
                        </p>

                        <div className="single__content-image">
                            <img src="/images/hero-4.webp" alt="content" />
                        </div>
                    </div>
                    {/* Single Content */}

                    {/* Single Content */}
                    <div className="single__content other__fade-in">
                        <h2>The ThunderHouse Mission</h2>

                        <p>
                            The barriers to bringing innovations to fruition are
                            even greater and more complex today than they were
                            in Franklin's day. And today's ThunderHouse leads
                            innovators through these barriers to success.
                            ThunderHouse itself is an innovation in its
                            transformation in service offering from Marketing
                            Communications (MarCom) to Organizational
                            Communications (OrgCom).
                        </p>

                        <div className="single__content-image">
                            <img src="/images/hero-2.webp" alt="content" />
                        </div>
                    </div>
                    {/* Single Content */}
                </div>
            </div>
        </section>
    );
};

export default Legacy;
