import { Link } from "react-router-dom";
import * as React from 'react';

import styles from "./Home.module.css";

import TitleCards from "./TitleCards";

import { Carousel } from 'antd';

import BookIcon from "../assets/book.png"


// NOTE: Starting Home
function Home() {

    return (
        <>
            <main>
                <h1>Home</h1>
                <Carousel
                    className="carousel"
                    autoplay={{
                        dotDuration: true,
                    }}
                    autoplaySpeed={5000}
                >
                    <div>
                        <h3 className={styles.card}>1</h3>
                    </div>
                    <div>
                        <h3 className={styles.card}>2</h3>
                    </div>
                    <div>
                        <h3 className={styles.card}>3</h3>
                    </div>
                    <div>
                        <h3 className={styles.card}>4</h3>
                    </div>
                </Carousel>

                <div>
                    <Link to="/popular">Show all</Link>
                    <img src={BookIcon} alt="book Icon" />
                    <TitleCards />
                    <TitleCards theme="Latest" />
                </div>
            </main >
        </>
    )
}

export default Home;
