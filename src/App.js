import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <ul>
            {players.map(player=><li>{player}</li>)}
        </ul>
        <Count></Count>
        <Users></Users>
        <ul>
          {products.map(product=><li>{product.name}</li>)}
        </ul>
        {/* <Products name={products[0].name} price={products[0].price}></Products>      
        <Products name={products[1].name} price={products[1].price}></Products> */}
        {
          products.map(product=><Products name={product.name} price={product.price}></Products>)
        }

      </header>
    </div>
  );  
}
const players=['Tamim', 'Shakib', 'Mushfiq', 'Mahmudullah']
const productStyle={
  border:'2px solid White',
  margin: '20px',
  borderRadius: '10px',
  padding: '15px'
}
const products=[
  {name: 'Photoshop',price: '500 $'},
  {name: 'Illustrator',price: '200 $'},
  {name: 'Primere Pro',price: '10 $'},
  {name: 'Gimp',price: '30 $'}
]
const productNames=products.map(product=> product.name);



function Products(props){
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button>Buy Now</button>

    </div> 
   )
}
function Count(){
  const [count, setCount]= useState(0);
  const increaseHandler= ()=>{
    const newCount=count+1;
    setCount(newCount);
  };
  return(
    <div>
       <h1>Count: {count}</h1>
       <button onClick={increaseHandler}> Increase</button>
       <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
// function Users(){
//   const [users,setUser]= useState([]);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>setUser(data));
//   },[]);
//   return (
//     <div>
//       <h3>Dynamic Users: {users.length}</h3>
//       <ul>
//         {users.map(user=><li>{user.name}</li>)}        
//       </ul>      
//     </div>
//   )
// }
function Users(){
  const[users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);
  
  return(
    <div>
      <h3>Dynamic Users Section By Munna:</h3>
      <ul>
        {users.map(user=><li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App;