import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [exploreMain, setExploreMain] = useState(false);

    const handleMainOpen = () => setExploreMain(true);
    const handleMainClose = () => setExploreMain(false);

    const onMouseStyle = {
        opacity: exploreMain ? 1 : 0,
    };

    return (
        <section className="home">
            <div className="overlay-container">
                <article className="home-text-container">
                    <h5>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <p className="description">
                        Let's face it. If you want to go to space, you might as well geniunely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out-of-this-world experience.
                    </p>
                </article>
                <article className="explore-btn-container">
                    <div onMouseOver={handleMainOpen} onMouseOut={handleMainClose}>
                        <div className="explore-btn-bg" style={onMouseStyle}></div>
                        <Link to="/destination">
                            <button className="explore-btn">EXPLORE</button>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}