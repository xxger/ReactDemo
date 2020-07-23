import React, { useState} from 'react';

function Example1(){
    const [name , setName] = useState('小明')
    const [sex , setSex] = useState('男')
    const [age , setAge] = useState('18')
    return(
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
    )
}

export default Example1