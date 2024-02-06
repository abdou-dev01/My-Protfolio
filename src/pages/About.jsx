import Controls from "../component/Controls"

function About({selected, setSelected}) {
    return (
        <>
        <section className="container sections" id="about">
        <div className="main-title">
            <h1>about <span>me</span>
                <span className="bg-text">my stats</span>
            </h1>
        </div>
        <div className="about-me">
            <div className="stats-info">
                <div className="info">
                    <h3>INFORMATION ABOUT ME</h3>
                    <p>Hello! 👋 I'm Abdelouahab Benbachir (Abdou), a passionate and results-driven web developer with a love for crafting engaging and user-centric digital experiences. Based in Algeria, I bring <b>4</b> Years of hands-on experience in the ever-evolving world of web development.</p>
                    <p>My journey into the world of coding began with a curiosity to understand how the websites I interacted with daily were built. What started as a personal exploration quickly transformed into a deep-seated passion for turning ideas into beautifully functional websites and applications.</p>
                    <p>Being part of coding communities has opened up opportunities to connect with fellow enthusiasts, learn from experienced developers, and stay updated on the latest industry trends. Engaging with coding challenges on platforms like LeetCode has become a regular part of my routine, allowing me to sharpen my problem-solving abilities and prepare for potential technical interviews.</p>
                    <p>I'm excited about the possibilities that lie ahead in my coding journey. Whether it's contributing to open-source projects, tackling more complex algorithms, or exploring new technologies, I am committed to continuous learning and growth in the dynamic field of programming. The journey has just begun, and I'm eager to see where my coding skills will take me next.</p>
                    <a href="/files/myCv.pdf" download="Abdou/Cv.pdf"><button className="button" > download cv <i className="fa-solid fa-download"></i></button></a>
                </div>
                <div className="stats">
                    <div className="stats-box">
                        <span>15+</span>
                        <p>project completed</p>
                    </div>
                    <div className="stats-box">
                        <span>4+</span>
                        <p>years of experience</p>
                    </div>
                    <div className="stats-box">
                        <span>10+</span>
                        <p>happy clients</p>
                    </div>
                    <div className="stats-box">
                        <span>7+</span>
                        <p>customer review</p>
                    </div>
                </div>
            </div>
            <div className="my-skills">
                <div className="about-title">
                    <h2>my skills</h2>
                </div>
                <div className="skills-container">
                    <div className="skill">
                        <p className="skill-name">html <span className="progress-perc">90%</span></p>
                        <span className="progress" data-width="90%" ></span>
                    </div>
                    <div className="skill">
                        <p className="skill-name">javascript<span className="progress-perc">85%</span></p>
                        <span className="progress" data-width="85%"></span>
                    </div>
                    <div className="skill">
                        <p className="skill-name">nodejs <span className="progress-perc">50%</span></p>
                        <span className="progress" data-width="50%"></span>
                    </div>
                    <div className="skill">
                        <p className="skill-name">css3 <span className="progress-perc">90%</span></p>
                        <span className="progress" data-width="90%"></span>
                    </div>
                    <div className="skill">
                        <p className="skill-name">reactjs <span className="progress-perc">70%</span></p>
                        <span className="progress" data-width="70%"></span>
                    </div>
                    <div className="skill">
                        <p className="skill-name">python <span className="progress-perc">60%</span></p>
                        <span className="progress" data-width="60%"></span>
                    </div>
                </div>
            </div>
            <div className="my-timeline">
                <div className="about-title">
                    <h2>my timeline</h2>
                </div>
                <div className="timeline-container">
                    <div className="container">
                        <div className="timeline">
                            <div className="timeline-icon">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="timeline-desc">
                                <p className="year">2019 - 2020</p>
                                <h3>start learning journey <span>- udemy</span></h3>
                                <p className="desc">I started my journey with coding and I've made significant progress in understanding the core concepts of programming languages, data structures, and algorithms. Mastering the fundamentals has provided me with a strong foundation to explore more advanced topics in the world of coding. </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-icon">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="timeline-desc">
                                <p className="year">2020 - 2021</p>
                                <h3>hands-on experience  <span>- projects</span></h3>
                                <p className="desc">I delved into coding, I found joy in solving problems and creating small applications with<b> HTML / CSS / JAVASCRIPT.</b> The hands-on experience has been invaluable, allowing me to apply theoretical knowledge to real-world scenarios. Building projects, whether they are simple scripts or more complex applications, has been an excellent way to reinforce what I've learned and gain practical skills.</p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-icon">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="timeline-desc">
                                <p className="year">2021 - 2022</p>
                                <h3>web developer <span>- upwork</span></h3>
                                <p className="desc">I started to specialize in a particular programming language(Javascript), and I'm continually deepening my understanding of its features and capabilities. Choosing a language that aligns with my interests and goals has been instrumental in shaping my coding journey.</p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-icon">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="timeline-desc">
                                <p className="year">2022 - present</p>
                                <h3>web developer <span>- upwork</span></h3>
                                <p className="desc">Looking ahead, I expand my skills by exploring frameworks and libraries related to Javascript which is ReactJS . Additionally, I aim to enhance my understanding of databases, version control systems, and best practices in software development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </section>
        <Controls selected={selected} setSelected={setSelected}/>
        </>
    )
}

export default About
