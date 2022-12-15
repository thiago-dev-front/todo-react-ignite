import styles from "./task.module.css";
import {TbTrash} from "react-icons/tb"

export function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} >
                <div />
            </button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima maxime vel aut ad dolorum.</p>
            <button className={styles.deleteButton} >
                <TbTrash  size={20}/>
            </button>
        </div>
    )
}