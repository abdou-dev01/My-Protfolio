import Controls from "../component/Controls"
import port1 from "../assets/images/port1.jpg"
import port2 from "../assets/images/port2.jpg"
import port3 from "../assets/images/port3.jpg"
import port4 from "../assets/images/port4.jpg"
import port5 from "../assets/images/port5.jpg"
import port6 from "../assets/images/port6.jpg"

function Blogs({selected, setSelected}) {
    return (
        <>
        <section className="container sections" id="blogs">
        <div className="main-title">
            <h1>my <span>blogs</span>
                <span className="bg-text">my blogs</span>
            </h1>
        </div>
        <div className="container">
            <div className="blogs-container">
                <div className="blog">
                    <div className="blog-image">
                        <img className="img" src={port1} alt="port1" />
                    </div>
                    <div className="blog-des">
                        <h3><a href="#">How to Create Your Own Website</a></h3>
                        <p> you'll need to choose a domain name, select a website builder or coding platform, design your site, add content, and optimize for SEO.</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-image">
                        <img className="img" src={port2} alt="port2" />
                    </div>
                    <div className="blog-des">
                        <h3><a href="#">How to Become an Expert in Web Design</a></h3>
                        <p>focus on learning HTML, CSS, and JavaScript thoroughly. Practice designing websites, stay updated on industry trends, study user experience (UX) principles</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-image">
                        <img className="img" src={port3} alt="port3" />
                    </div>
                    <div className="blog-des">
                        <h3><a href="#">Become a Web Designer</a></h3>
                        <p>start by learning HTML, CSS, and basic design principles. Practice by creating your own projects and studying existing websites. Take online courses or tutorials</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-image">
                        <img className="img" src={port4} alt="port4" />
                    </div>
                    <div className="blog-des">
                        <h3><a href="#">Debbuging made easy with Web Inspector</a></h3>
                        <p>a powerful tool provided by web browsers like Chrome or Firefox. Simply right-click on an element and select "Inspect" to view its HTML and CSS code, as well as inspect JavaScript errors in the console tab.</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-image">
                        <img className="img" src={port5} alt="port5" />
                    </div>
                    <div className="blog-des">
                        <h3><a href="#">Get started with Front-end Framwork</a></h3>
                        <p> choose one such as React, Vue.js, or Angular. Begin by learning its fundamentals, including component structure, state management, and routing. Follow tutorials and documentation provided by the framework's official website.</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-image">
                        <img className="img" src={port6} alt="port6" />
                    </div>
                    <div className="blog-des">
                        <h3><a href="#">This is what you need to know about Front-end Frameworks</a></h3>
                        <p> Front-end frameworks provide a structured approach to building user interfaces for web applications, they use a component-based architecture, offer solutions for managing application state and  routing capabilities for handling navigation within a single-page application.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <Controls selected={selected} setSelected={setSelected}/>
        </>
    )
}

export default Blogs
