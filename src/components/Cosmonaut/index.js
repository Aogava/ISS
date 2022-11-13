import css from "./style.module.css";
import avatar from "../../assets/avatar.svg";

const Cosmonaut = (props) => {
  return (
    <li className={css["cosmonaut"]}>
      <img className={css["cosmonaut__avatar"]} src={avatar} alt="avatar" />
      <div className={css["cosmonaut__name"]}>{props.name}</div>
    </li>
  )
}

export default Cosmonaut;