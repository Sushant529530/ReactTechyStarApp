import React from 'react';
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

function Home() {
  return (
    <>
        <div className='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all Your Problems</p>
        </main>
        
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero illo, odit provident eos quis odio quaerat molestiae id magni corporis libero eligendi asperiores iusto deserunt vel laudantium quidem voluptate ducimus saepe corrupti veritatis error doloribus dicta! Vero magni alias id odit quasi in pariatur.</p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, blanditiis. Ipsam blanditiis nostrum suscipit temporibus eaque odio aut tenetur possimus! Porro, maxime! Possimus sint laudantium quibusdam maxime eveniet minus sed. Amet iusto suscipit consectetur optio.</p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                      <AiFillGoogleCircle/>
                      <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                      <AiFillAmazonCircle/>
                      <p>Amazone</p>
                    </div>
                    <div style={{
                        animationDelay: "0.8s",
                    }}>
                      <AiFillInstagram/>
                      <p>Instagram</p>
                    </div>
                    <div style={{
                        animationDelay: "1s",
                    }}>
                      <AiFillYoutube/>
                      <p>YouTube</p>
                    </div>
                </article>
            </div>
        </div>
        
    </>
  )
}

export default Home
