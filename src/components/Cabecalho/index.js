import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './Logo.png';
import CabecalhoLink from '../CabecalhoLink';

function Cabecalho(){

    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Lodo do cinetag"></img>
            </Link>

            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )

}

export default Cabecalho;