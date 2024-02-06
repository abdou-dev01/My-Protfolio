/* eslint-disable react/prop-types */
import Controls from "../component/Controls"

function Contact({selected, setSelected}) {
    return (
        <>
        <section className="container sections" id="contact">
        <div className="main-title">
            <h1>contact <span>me</span>
                <span className="bg-text">contact</span>
            </h1>
        </div>
        <div className="container">
            <div className="contact">
                <h3>contact me here</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eaque recusandae, illo inventore neque animi iusto obcaecati tenetur numquam nihil amet voluptates</p>
                <div className="my-contact">
                    <p><i className="fa-solid fa-location-dot"></i> location: </p>
                    <p> algeries, algeria</p>
                </div>
                <div className="my-contact">
                    <p><i className="fa-solid fa-envelope"></i> email: </p>
                    <p> abdelouahab.business09@gmail.com</p>
                </div>
                <div className="my-contact">
                    <p><i className="fa-solid fa-user-graduate"></i> education: </p>
                    <p> mit, coursera</p>
                </div>
                <div className="my-contact">
                    <p><i className="fa-solid fa-phone"></i> mobile number: </p>
                    <p> 00213559667929</p>
                </div>
                <div className="my-contact">
                    <p><i className="fa-solid fa-language"></i> languages: </p>
                    <p> english, arabic, french</p>
                </div>
            </div>
            <div className="contact-icons">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="your name" />
                <input type="email" placeholder="your email" required />
                <input type="text" placeholder="enter subject" />
                <textarea cols="30" rows="10" placeholder="message here"></textarea>
                <button className="button">send your message</button>
            </form>
        </div>
    </section>
    <Controls selected={selected} setSelected={setSelected}/>
    </>
    )
}

export default Contact
