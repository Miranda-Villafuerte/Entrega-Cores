import styles from './../css/Rosado.module.css'
import Azul from './Azul'
import Verde from './Verde'

const Rosado= ()=>{
    return(
            <>
            <div className={styles.rosado}>
                <Azul/>
                <Azul/>
                <Azul/>
                <Verde/>
            </div>
            
            </>
        )
}

export default Rosado