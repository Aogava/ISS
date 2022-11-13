import css from "./style.module.css";
import Cosmonaut from "../Cosmonaut";

const CosmonautsList = (props) => {
  return (
    <div className={css["list"]}>
      <ul className={css["list__cosmonauts"]}>
        {
          props.cosmonauts.map(cosmonaut => (<Cosmonaut key={cosmonaut.name} name={cosmonaut.name} />))
        }
      </ul>
      <div className={css["list__amount"]}>Total amount: {props.cosmonauts.length} people on ISS</div>
    </div>
  )
}

export default CosmonautsList;