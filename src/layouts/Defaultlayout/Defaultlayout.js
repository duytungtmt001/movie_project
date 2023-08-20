import clsx from "clsx"
import styles from './Defaultlayout.module.scss'

import Header from "../components/Header"

function Defaultlayout({children}) {
    return (
        <div className={clsx(styles.wrapper)}>
            {children.type.name === 'Detail' ? <Header noStateHeaderColor/> : <Header />}
            {children}
        </div>
    )
}

export default Defaultlayout