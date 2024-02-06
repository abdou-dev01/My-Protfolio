import Controls from "../component/Controls"
import Project from "../component/Project"
import forkify from "../assets/images/forkify.png"
import comfyHouse from "../assets/images/comfy-house.png"
import bankist from "../assets/images/bankist.png"
import reactQuiz from "../assets/images/react-quiz.png"
import usePopcorn from "../assets/images/usePopcorn.png"
import worldwise from "../assets/images/worldwise.png"



function Portfolio({selected, setSelected}) {
    return (
<>
        <section className="container sections" id="Portfolio">
        <div className="main-title">
            <h1>my <span>portfolio</span>
                <span className="bg-text">my work</span>
            </h1>
        </div>
        <p className="work">Here is some of my work that I've done in various programming languages.</p>
        <div className="contianer">
            <div className="portfolio-container">
                <Project imageSrc={forkify} alt={"forkify"} github={"https://github.com/abdou-dev01/forkify-search-recipe"} demo={"https://jazzy-crisp-f4a9ba.netlify.app/"}/>
                <Project imageSrc={comfyHouse} alt={"comfy-house"} github={"https://github.com/abdou-dev01/comfy-house"} demo={"https://abdou-dev01.github.io/comfy-house/"}/>
                <Project imageSrc={bankist} alt={"bankist"} github={"https://github.com/abdou-dev01/bankist"} demo={"https://abdou-dev01.github.io/bankist"}/>
                <Project imageSrc={reactQuiz} alt={"react-quiz"} github={"https://github.com/abdou-dev01/forkify-search-recipe"} demo={"https://jazzy-crisp-f4a9ba.netlify.app/"}/>
                <Project imageSrc={usePopcorn} alt={"usePopcorn"} github={"https://github.com/abdou-dev01/usePopcorn"} demo={"https://willowy-basbousa-0e740d.netlify.app/"}/>
                <Project imageSrc={worldwise} alt={"worldwise"} github={"https://github.com/abdou-dev01/forkify-search-recipe"} demo={"https://jazzy-crisp-f4a9ba.netlify.app/"}/>
            </div>
        </div>
    </section>
    <Controls selected={selected} setSelected={setSelected}/>
    </>
    )
}

export default Portfolio
