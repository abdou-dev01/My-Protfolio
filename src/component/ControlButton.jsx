function ControlButton({icon, id, handelClick, selected}) {

    return (
        <button className={`controls ${selected?.dataset.id === id ? "active": ""}`} data-id={`${id}`} onClick={handelClick}>
            <i className={`fa-solid ${icon}`} ></i>
        </button>
    )
}

export default ControlButton
