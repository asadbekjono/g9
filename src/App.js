import React from 'react';
import img from "./img/image (1).png"
import './main.css'
import img2 from './img/200117200513_484017 5.png'
import img3 from './img/Удалить.png'

function App(props) {
    return (

        <div className={"body"}>

            <img src={img} width={100 + "%"} height={600 + 'px'} style={{background: "white"}} alt=""/>
            <h1 className={'flowr'}>Корзина</h1>

            <img src={img2} width={331} height={330} className={'gril'} alt=""/>
            <h2 className={"romashki"}>№225 “Ромашки для Наташки” </h2>
            <img src={img3} className={"del"} alt=""/>
            <p style={{color: "gray"}} className={'grn'}>5 400 грн</p>
            <h5 style={{color: "green"}} className={'grn2'}>3 700 грн</h5>
            <button className={"btn btn-light "} style={{
                marginLeft: 1130 + 'px',
                width: 105 + 'px',
                height: 50 + 'px',
                borderRadius: 50 + 'px',
                marginTop: -90 + 'px'
            }}>- 1 +
            </button>


            <img src={img2} width={331} height={330} className={'gril2'} alt=""/>
            <h2 className={"romashki"}>№225 “Ромашки для Наташки” </h2>
            <img src={img3} className={"del"} alt=""/>
            <p style={{color: "gray"}} className={'grn'}>5 400 грн</p>
            <h5 style={{color: "green"}} className={'grn2'}>3 700 грн</h5>
            <button className={"btn btn-light "} style={{
                marginLeft: 1130 + 'px',
                width: 105 + 'px',
                height: 50 + 'px',
                borderRadius: 50 + 'px',
                marginTop: -90 + 'px'
            }}>- 1 +
            </button>


            <h1 style={{marginLeft: 530 + 'px', marginTop: 80 + 'px'}}>Сумма заказов</h1>
            <h4 style={{marginLeft: 135 + 'px', marginTop: 35 + 'px'}}>Общая сумма заказов:</h4>
            <h4 style={{marginLeft: 135 + 'px', marginTop: 18 + 'px'}}>Способ оплаты:</h4>
            <h4 style={{marginLeft: 135 + 'px', marginTop: 64 + 'px'}}>Доставка:</h4>
            <h4 style={{marginLeft: 264 + 'px', marginTop: -34 + 'px'}}>Самовызов:</h4>
            <h4 style={{marginLeft: 264 + 'px', marginTop: 4 + 'px'}}>Курьером:</h4>
            <h4 style={{marginLeft: 135 + 'px', marginTop: 51 + 'px'}}> Скидка: :</h4>
            <h4 style={{marginLeft: 135 + 'px', marginTop: 18 + 'px'}}> Итого к оплате:</h4>
            <h5 style={{marginLeft: 1226 + 'px', marginTop: -330 + 'px'}}> 5 400 грн</h5>
            <div>
                <div className={"redio"}></div>
                <h6 className={'pri'}>Оплата при доставке</h6>
            </div>
            <div>
                <div className={"redio2"}></div>
                <h6 className={'pri2'}>Оплата картой</h6>
            </div>
            <div>
                <div className={"redio3"}></div>
                <h6 className={'pri3'}>Оплата на карту ПриватБанк</h6>
            </div>
            <div>
                <div className={"redio4"}></div>
                <h6 className={'pri4'}>Бесплатно</h6>
            </div>
            <div>
                <div className={"redio5"}></div>
                <h6 className={'pri5'}>000 грн</h6>
            </div>
            <div>
                <h6 className={'pri6'}>-10%</h6>
            </div>
            <div>
                <h4 className={'pri7'}>5 130 грн</h4>
            </div>
            <h1 className={'zakaz'}>Оформление заказа</h1>
            <h6 style={{marginLeft: 436 + 'px', marginTop: 38 + 'px'}}>Новый покупатель</h6>
            <h6 style={{marginLeft: 710 + 'px', marginTop: -28 + 'px'}}>Постоянный покупатель</h6>
            <input type="text " className={' inp'} style={{height: 50 + 'px', borderRadius: 50 + 'px'}}
                   placeholder={"Имя"} color={"gray"}/>
            <input type="text " className={' inp2'} style={{height: 50 + 'px', borderRadius: 50 + 'px'}}
                   placeholder={"Телефон"} color={"gray"}/>
            <input type="text " className={' inp3'} style={{height: 50 + 'px', borderRadius: 50 + 'px'}}
                   placeholder={"Адрес доставки"} color={"gray"}/>
            <div className={"pod"}>Подтверждение заказа</div>
        </div>

    );
}

export default App;