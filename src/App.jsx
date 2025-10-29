import React,{ useState } from 'react'
import './App.css'

function App() {
     const[add,setadd]=useState[{}];
     const[sub,setsub]=useState[{}];
     const[mul,setmul]=useState[{}];
     const[div,setdiv]=useState[{}];
     <script>
        function add(const a,const b) {
          console.log(a+b)
        }
        funstion sub(const a,const b)
        {
          console.log(a-b)
        }
        function mul(const a,const b) {
          console.log(a*b)
        }
        function div(const a,const b) {
          console.log(a/b)
        }
        function mod(const a,const) {
          console.log(a%b)
        }
      </script>
  return (
    <div>
      <h1>CALCULATER APP</h1>
      <input placeholder='a' inputMode='numeric'></input>
      <input placeholder='b' inputMode='numeric'></input>
      <button onClick={add(a,b)}>ADDING</button>
      <button onClick={sub(a,b)}>SUBRACTING</button>
      <button onClick={mul(a,b)}>MULTIPLYING</button>
      <button onClick={div(a,b)}>DIVISON</button>
      <button onClick={mod(a,b)}>MOD</button>
    </div>
  );
}
export default App;
