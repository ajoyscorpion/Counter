import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,reset} from '../redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.count.value)
  return (
    <div style={{width:"100%", height:"100vh"}} className='d-flex justify-content-center align-items-center'>
        <div className='border rounded p-3 w-25' >
            <h1 style={{fontSize:"100px"}} className="fw-bolder mb-5" >{count}</h1>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary' onClick={()=>dispatch(increment())}>Increment</button>
                <button className='btn btn-danger' onClick={()=>dispatch(reset())} >Reset</button>
                <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Counter