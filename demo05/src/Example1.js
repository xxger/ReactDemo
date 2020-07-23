import React, { useState} from 'react';

function Example1(){
    const [count , setCount] = useState(0)
    return(
        <div>
            <p>已点击{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
        </div>
    )
}

export default Example1