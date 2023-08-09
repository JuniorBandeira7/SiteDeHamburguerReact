import style from './Slider.module.css'
import imagem1 from './imgs/s1.jpg'
import imagem2 from './imgs/s2.jpg'


function Slider(){
    return(
        <div id={style.dvslider}>
            <img src={imagem1} alt="" />
        </div>
    )
}
export default Slider