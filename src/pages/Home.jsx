import Controls from "../component/Controls"
import heroImage from "../assets/images/hero.png"

function Home({selected, setSelected}) {
    return (
        <>
    <header className="display sections" id="home">
        <div className="container">
            <div></div>
            <div className="introduce">
                <h1>hi, i'm <span>abdelouahab benbachir (Abdou)</span> a web developer</h1>
                <p>A passionate and results-driven web developer with a love for crafting engaging and user-centric digital experiences. Based in Algeria, I bring 4 years of hands-on experience in the ever-evolving world of web development. </p>
                <p>Whether you're looking to collaborate on a project, discuss the latest trends in web development, or explore new opportunities, I'm always open to connecting with like-minded individuals. Let's build something amazing together!<br></br>
Feel free to explore my portfolio, and don't hesitate to reach out. I'm excited about the possibilities that lie ahead!</p>
                <a href="/files/myCv.pdf" download="Abdou/Cv.pdf"><button className="button" > download cv <i className="fa-solid fa-download"></i></button></a>
            </div>
        </div>
    </header>
                <Controls selected={selected} setSelected={setSelected} />
                </>
    )
}

export default Home
