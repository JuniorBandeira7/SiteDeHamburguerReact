import imagem1 from '../imgs/s1.jpg'
import imagem2 from '../imgs/s2.jpg'
import style from './SectionCardapioComponents.module.css'
function ContainerCardapio(){
    return(
        <div id={style.containerCardapio} data-anima="left">
            <div className={style.divCardapio}>
                <img src={imagem1} alt=""/>
                <h3>HAMBURGUER 1</h3>
                <div>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores expedita unde excepturi, quae similique officiis
                    molestiae quia repellat, eum magnam placeat maxime, voluptas
                    velit asperiores enim veniam necessitatibus aliquid incidunt!
                    </p>
                </div>
            </div>
            <div className={style.divCardapio}>
                <img src={imagem2} alt=""/>
                <h3>HAMBURGUER 2</h3>
                <div>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores expedita unde excepturi, quae similique officiis
                    molestiae quia repellat, eum magnam placeat maxime, voluptas
                    velit asperiores enim veniam necessitatibus aliquid incidunt!
                    </p>
                </div>
            </div>
            <div className={style.divCardapio}>
                <img src={imagem1} alt=""/>
                <h3>HAMBURGUER 1</h3>
                <div>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores expedita unde excepturi, quae similique officiis
                    molestiae quia repellat, eum magnam placeat maxime, voluptas
                    velit asperiores enim veniam necessitatibus aliquid incidunt!
                    </p>
                </div>
            </div>
            <div className={style.divCardapio}>
                <img src={imagem2} alt=""/>
                <h3>HAMBURGUER 2</h3>
                <div>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores expedita unde excepturi, quae similique officiis
                    molestiae quia repellat, eum magnam placeat maxime, voluptas
                    velit asperiores enim veniam necessitatibus aliquid incidunt!
                    </p>
                </div>
            </div>
            <div className={style.divCardapio}>
                <img src={imagem1} alt=""/>
                <h3>HAMBURGUER 1</h3>
                <div>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores expedita unde excepturi, quae similique officiis
                    molestiae quia repellat, eum magnam placeat maxime, voluptas
                    velit asperiores enim veniam necessitatibus aliquid incidunt!
                    </p>
                </div>
            </div>
            <div className={style.divCardapio}>
                <img src={imagem2} alt=""/>
                <h3>HAMBURGUER 2</h3>
                <div>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores expedita unde excepturi, quae similique officiis
                    molestiae quia repellat, eum magnam placeat maxime, voluptas
                    velit asperiores enim veniam necessitatibus aliquid incidunt!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ContainerCardapio