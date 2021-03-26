import React from 'react'
import {useSelector} from 'react-redux'

const Counter=()=>{
    const {counter_key} = useSelector((state)=> state);
    //Bununla aynı:
    //const counter_key = useSelector((state)=> state.counter_key);
    return(
        <div>
        {counter_key}
        </div>
    )
}

export default Counter;