import React from 'react';
import './App.css';
import Item from "./components/Item/Item"

class App extends React.Component {
  state={
    item:[{
    id:0,
    image:"",
    name:"jabłka",
    avaliableAmount:30,
    amount:0,
    cost:2,
    
  },
  {
    id:1,
    image:"",
    name:"mleko",
    avaliableAmount:10,
    amount:0,
    cost:3,
  },
  {
    id:2,
    image:"",
    name:"marchewka",
    avaliableAmount:50,
    amount:0,
    cost:0.8,
  }
],

sum:0,
allAmount:0,
avaliable_apples:0,
avaliable_milk:0,
avaliable_carrot:0,
value:'',

}

addItem=(e)=>{
  e.preventDefault();
  let valueNumber= e.target.value;
  // this.setState({
  //  value: valueNumber,
  // })

  if(valueNumber==="0"){
    if(this.state.avaliable_apples>=30){
      alert("brak takiej ilości jabłek")
    }else{ this.setState(prevState => ({
      avaliable_apples: prevState.avaliable_apples + 1,
    }))
  }
}
  
  else if(valueNumber==="1"){
    if(this.state.avaliable_milk>=10){
      alert("Brak wystarczającej ilości mleka")
    } else {
      this.setState( prevState => ({
        avaliable_milk:prevState.avaliable_milk + 1,
      }))
    }
    }
     else if(valueNumber==="2"){
       if(this.state.avaliable_carrot>=50){
        alert("Brak wystarczającej ilości marchewki")
       }else{
        this.setState(prevState =>({
          avaliable_carrot:prevState.avaliable_carrot + 1,
        }))
       }
   
  }
  
}


removeItem=(e)=>{  
  let valueNumber= e.target.value;
  this.setState({
   value: valueNumber,
  })

  if(this.state.value==="0"){
    // if(this.state.avaliable_apples<=30){
    //   this.setState({
    //     avaliable_apples: this.state.avaliable_apples - 1,
    //   })
    // }else if (this.state.avaliable_apples===0){
    //    alert("niewystarczająca liczba jablek")    
    // console.log("jablka" + this.state.avaliable_apples)}
    console.log("aaa")
  }
  
  else if(this.state.value==="1"){
    // if(this.state.avaliable_milk<=10){
    //   this.setState({
    //     avaliable_milk: this.state.avaliable_milk - 1,
    //   })
    //   console.log("mleko" + this.state.avaliable_milk)
    //     } else  if (this.state.avaliable_milk===0) {
     
    //   console.log("niewystarczajaca ilosc mleka")
    // }
    console.log("b")
  }
     else if(this.state.value==="2"){
      //  if(this.state.avaliable_carrot<=50){
      //   this.setState({
      //     avaliable_carrot: this.state.avaliable_carrot + 1,
      //   })       }
      //   else  if (this.state.avaliable_carrot===0){
        
      //   console.log("niewystarczajaca ilosc marchewki")
      //  }
   console.log("ce")
  
}
}

  render(){
  return (
    <div className="App">
      {this.state.item.map(({id, image, name, avaliableAmount, amount, cost})=>(
        <Item key={id}
        id={id}
        value={id}
        image={image}
        name={name}
        avaliableAmount={avaliableAmount}
        amount={amount}
        cost={cost}
        submitFn={this.addItem}
        submitFn2={this.removeItem}
        />
        ))}
  
   {/* <p>suma  produktów w koszyku to {this.state.allAmount}</p>
   <p>koszt to {this.state.sum}</p> */}
     <p>jabłka: {this.state.avaliable_apples}</p> 
     <p>mleko: {this.state.avaliable_milk}</p> 
     <p>marchew: {this.state.avaliable_carrot}</p> 
    </div>
  );
}
}
export default App;