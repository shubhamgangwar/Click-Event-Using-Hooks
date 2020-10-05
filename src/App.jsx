import React, { useState } from 'react';

const App = () => {

    const state = useState();

    const[count , SetCount] = useState(0);
    
    const IncNum = () =>{

        SetCount(count+1);
    };

    return(
        <>
            <h1>Click On Button to increament The Value 💯</h1>
            <div className="count">
            <h1>{count}</h1>
            <button className='button' onClick={IncNum}> Click Me </button>
            </div>
        </>
    )

}

export default App;