import styles from './NaoEncontrada.module.css';

function NaoEncontrada(){
    return(
        <section className={styles.container}>
            <h1>Ops!</h1>
            <h2>O conteúdo que você procura não existe.</h2>
        </section>
    );
}

export default NaoEncontrada;