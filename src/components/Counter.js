import React from 'react'
import {useSelector} from 'react-redux'

const Counter=()=>{
    const {counter_key, list_key} = useSelector((state)=> state);
    //Bununla aynı:
    //const counter_key = useSelector((state)=> state.counter_key);
    return(
        <div>
        <h1>{counter_key}</h1>
        <ul>
        {list_key.map((item)=>{
            return <li>{item}</li>
        })}
        </ul>
        </div>
    )
}

export default Counter;