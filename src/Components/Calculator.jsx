import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';


export default function Calculator() {
    const [num, setNum] = useState(0);
    const[oldnum, setOldNum] = useState(0);
    const[operador, setOperador] = useState();



    function inputNum (e){
        var input = e.target.value;
        if (num === 0){
            setNum (input);
        } else {
            setNum (num+input);
       }
    } 

    function reset (){
        setNum(0);
    }

    function porcentage(){
        setNum (num / 100);
    }

    function negativar(){
        if (num>0){
            setNum(-num)
        } else{
            setNum(Math.abs(num)) // math é uma biblioteca que vem com react
        }
    }

    function execucao(e){
        var operador = e.target.value;
        setOperador(operador)
        setOldNum(num)
        setNum(0)
    }


    function resultado() {
        if (operador === "/") {
          setNum(parseFloat((oldnum / num).toFixed(5)));
        } else if (operador === "x") {
          setNum(parseFloat((oldnum * num).toFixed(5)));
        } else if (operador === "-") {
          setNum(parseFloat((oldnum - num).toFixed(5)));
        } else if (operador === "+") {
          setNum(parseFloat((parseFloat(oldnum) + parseFloat(num)).toFixed(5)));
        }
    }

  return (
    <div>
        <Box m={20}/> 
        <Container maxWidth="xs">
                <div className="calculadora">
                            <h1 className='resultado'>{num}</h1>
                            <button className="bt-cinza" onClick={reset}>AC</button>
                            <button className="bt-cinza" onClick={negativar}>+/-</button>
                            <button className="bt-cinza" onClick={porcentage}>%</button>
                            <button className="bt-laranja" onClick={execucao} value={"/"}>/</button>

                            <button className="bt-cinzaclaro" onClick={inputNum} value={7}>7</button>
                            <button className="bt-cinzaclaro"onClick={inputNum} value={8}>8</button>
                            <button className="bt-cinzaclaro"onClick={inputNum} value={9}>9</button>
                            <button className="bt-laranja"onClick={execucao} value={"x"}>x</button>

                            <button className="bt-cinzaclaro"onClick={inputNum} value={4}>4</button>
                            <button className="bt-cinzaclaro"onClick={inputNum} value={5}>5</button>
                            <button className="bt-cinzaclaro"onClick={inputNum} value={6}>6</button>
                            <button className="bt-laranja"onClick={execucao}value={"-"}>-</button>

                            <button className="bt-cinzaclaro"onClick={inputNum} value={1}>1</button>
                            <button className="bt-cinzaclaro"onClick={inputNum} value={2}>2</button>
                            <button className="bt-cinzaclaro"onClick={inputNum} value={3}>3</button>
                            <button className="bt-laranja"onClick={execucao} value={"+"}>+</button>
                            
                            <button className="button-zero"onClick={inputNum} value={0}>0</button>
                            <button className="bt-cinzaclaro"onClick={inputNum} value={"."}>,</button>
                            <button className="bt-laranja" onClick={resultado}>=</button>
                </div>
        </Container>
    </div>
  );
}
