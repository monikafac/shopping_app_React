import React from 'react';

const Item = ({image, id, name, avaliableAmount, cost, submitFn, submitFn2, amount, value}) =>(
    <li>
        <div>Zdjęcie produktu:
            <img src={image} alt="a"/>
        </div>
       <p>Liczba porządkowa: {id}</p> 
       <p>{name}</p>
       <p>Ilość dostępnych sztuk: {avaliableAmount}</p>
       <p>Ilość kupionych: {amount}</p>
       <p>Koszt produktu: {cost}</p>

        <button onClick={submitFn} value={value}>Dodaj produkt</button>
        <button onClick={submitFn2} value={value}>Usuń produkt</button> 


    </li>
)

export default Item;