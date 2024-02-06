function Button({setIsDark}) {
    return (
    <button className="change-mode" onClick={() => setIsDark(mode => !mode)}><i className="fa-regular fa-sun"></i></button>
    )
}

export default Button
