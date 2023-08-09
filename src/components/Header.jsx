import styles from './Header.module.css'
function Header(){
    return(
        <header id={styles.headerPrincipal}>
        <nav>
                <span id={styles.hamburguer}></span>
            <ul>
                <li><a href="#header-1">Cardápio</a></li>
                <li><a href="#delivery">Delivery</a></li>
                <li><a href="#fale-conosco">Fale conosco</a></li>
                <li><a href="#footer-div">rodapé</a></li>
            </ul>
        </nav>
    </header>
    )
}
export default Header