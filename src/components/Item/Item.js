import React from 'react';

const Item = ({image, id, name, amount, cost, submitFn}) =>(
    <li>
        <div>Zdjęcie produktu:
            <img src={image} alt="a"/>
        </div>
       <p>Liczba porządkowa: {id}</p> 
       <p>{name}</p>
       <p>Ilość dostępnych sztuk: {amount}</p>
       <p>Koszt produktu: {cost}</p>

       <button onClick={submitFn}>Dodaj produkt</button>
       <button onClick={submitFn}>Usuń produkt</button>

    </li>
)

export default Item;