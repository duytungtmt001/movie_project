import clsx from "clsx"
import styles from './Defaultlayout.module.scss'

import Header from "../components/Header"
import { useNavigation } from "react-router-dom"
import Loading from "../../components/Loading"

function Defaultlayout({children}) {
    const navigation = useNavigation()
    return (
        <div className={clsx(styles.wrapper)}>
            {/* {navigation.state === 'loading' && <Loading />}
            {children.type.name === 'Detail' ? <Header noStateHeaderColor /> : <Header />} */}
            {children}
        </div>
    );
}

export default Defaultlayout