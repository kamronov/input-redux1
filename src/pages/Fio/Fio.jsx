import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Fio() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((state)=> state)
  const collect1 = (e)=>{
    e.preventDefault();
    if(e.target.name.value !== '' && e.target.lastName.value !== ''){
      navigate('/phone')
      console.log(selector);
      dispatch({
        type: 'fullName',
        payload:{
          id:1,
          name:e.target.name.value,
          lastName:e.target.lastName.value
        }
    })
    }
  }
  return (
    <div>
        <h1>Fio</h1>
      <form onSubmit={collect1} action="#">
        <input type="text" name='name' placeholder='Name'/> <br />
        <input type="text" name='lastName' placeholder='LastName'/> <br />
        <button>Next</button>
      </form>
    
    </div>
  )
}

export default Fio