import phone from './imgs/smartphone.png'
import style from './SectionDelivery.module.css'

function SectionDelivery(){
    return(
        <section id={style.DeliverySection}>
            <header class="header" data-anima="left">
                <h1>Entregamos na sua casa!</h1>
            </header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.612781779425!2d-73.98795218459388!3d40.74854517932798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY%2010001%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1643319908038!5m2!1spt-BR!2sbr"loading="lazy" data-anima="left" id={style.iframe}></iframe>
            <div id={style.ADelivery}><a href=""><img src={phone} alt=""/></a></div>
        </section>
    )
}
export default SectionDelivery