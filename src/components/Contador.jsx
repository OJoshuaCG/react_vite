import React, {useState} from 'react'
// import ReactDOM from 'react-dom/client'


function Contador(){
    const [count, setCount] = useState(0)

    const handlerAdd = () =>{
        setCount(c => c + 1);
    }

    const handlerSub = () => {
        setCount(c => c - 1);
    }

    return(<>
        <hr/>
        <h2>Contador: {count}</h2>        
        <button 
            onClick={handlerSub} 
            className={count == 0 ? "hide" : ""}>-1</button>
        <button 
            onClick={handlerAdd}
            className={count == 5 ? "hide" : ""}>+1</button>
    </>);
}

export default Contador;