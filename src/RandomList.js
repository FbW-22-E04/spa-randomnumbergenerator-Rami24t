import { useState } from "react";


function newRandomNumber(){
    return Math.floor(Math.random()*100); // gives 0 to 99
}

function RandomList() {

    const [randomNumbers,setRandomNumbers] = useState([]);
    return (<>
            <button onClick={()=>{setRandomNumbers([...randomNumbers, newRandomNumber()])}}>
            New Random Number
            </button>
            <ul>
            {randomNumbers.map( (num,idx) => <li key={idx}>{num}</li>)}
            </ul>
        </>
      );
}

export default RandomList;