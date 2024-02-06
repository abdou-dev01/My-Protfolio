function Project({imageSrc, alt, github, demo}) {
    return (
        <div className="portfolio-item">
            <div className="content">
                <img className="img" src={imageSrc} alt={alt} />
                <div className="hover-content">
                    <h2>project source</h2>
                    <div className="icons">
                        <a href={`${github}`} target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href={`${demo}`} target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
