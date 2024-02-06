import { useNavigate } from "react-router-dom"
import ControlButton from "./ControlButton";

function Controls({selected, setSelected}) {
    const navigate = useNavigate();
    // console.log(selected);

    function handelClick(e) {
        const target = e.target.closest(".controls")
        setSelected(prevSelected => {
            if (prevSelected !== target) return target
            else return prevSelected
        })
        navigate(`/${target.dataset.id}`);
    }

    return (
        <div className="controls-container">
            <ControlButton icon={"fa-house-user"} id={""} handelClick={handelClick} selected={selected} />
            <ControlButton icon={"fa-user"} id={"about"} handelClick={handelClick} selected={selected} />
            <ControlButton icon={"fa-briefcase"} id={"Portfolio"} handelClick={handelClick} selected={selected} />
            <ControlButton icon={"fa-newspaper"} id={"blogs"} handelClick={handelClick} selected={selected} />
            <ControlButton icon={"fa-envelope-open-text"} id={"contact"} handelClick={handelClick} selected={selected} />
    </div>
    )
}

export default Controls
