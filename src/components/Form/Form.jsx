import React from 'react'
import { useDispatch } from 'react-redux'
function Form() {
    const dispatch = useDispatch()
    const collect = ()=>{
        dispatch({
            type: 'fullName',
            payload:{id:1,name:'Ali',lastName:'Vali'}
        })
    }
  return (
    <div>
        <form action="#">
            <input type="text" />
        </form>
            <button onClick={collect}>Add</button>
    </div>
  )
}

export default Form