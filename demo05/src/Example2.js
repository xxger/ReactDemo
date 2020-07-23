import React, { useState, useEffect } from 'react';

function Example2(){
    const [ count, setCount ] = useState(0)
    useEffect(()=>{
        console.log(`点击了 ${count} 次`)
    })
    return(
        <div>
            <p>已点击{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
        </div>
    )
}
 
export default Example2;