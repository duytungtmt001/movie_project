import clsx from "clsx"
import styles from './Defaultlayout.module.scss'
import { useNavigation } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Loading from "../../components/Loading"

function Defaultlayout({children}) {
    const navigation = useNavigation()
    return (
        <div className={clsx(styles.wrapper)}>
            {navigation.state === 'loading' && <Loading />}
            {children.type.name === 'Detail' ? <Header noStateHeaderColor /> : <Header />}
            {children}
            <Footer />
        </div>
    );
}

export default Defaultlayout