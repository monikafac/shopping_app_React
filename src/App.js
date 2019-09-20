import React from 'react';
import './App.css';
import Item from "./components/Item/Item"

class App extends React.Component {
  state={
    item:[{
    id:1,
    image:"",
    name:"jabłka",
    amount:"30",
    cost:2,
    
  },
  {
    id:2,
    image:"",
    name:"mleko",
    amount:"10",
    cost:3,
  },
  {
    id:3,
    image:"",
    name:"marchewka",
    amount:"50",
    cost:0.8,
  }
]
}

addItem=()=>{
  console.log("dziala")
}


  render(){
  return (
    <div className="App">
      {this.state.item.map(({id, image, name, amount, cost})=>(
            <Item key={image}
        id={id}
        image={image}
        name={name}
        amount={amount}
        cost={cost}
        submitFn={this.addItem}
        />

        ))}
   
    </div>
  );
}
}
export default App;