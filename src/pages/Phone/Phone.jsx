import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Phone() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((state)=> state)

  const collect2 = (e)=>{
    e.preventDefault();
    if(e.target.phone.value !== '' && e.target.age.value !== ''){
      console.log(selector);
      navigate('/city')
      dispatch({
        type: 'phoneNumber',
        payload:{
          phone:e.target.phone.value,
          age:e.target.age.value
        }
    })
    }
  }
  return (
    <div>
      <h1>Phone</h1>
      <form onSubmit={collect2} action="#">
        <input autoComplete='off' type="text" name='phone' placeholder='Phone number'/> <br />
        <input autoComplete='off' type="text" name='age' placeholder='Age'/> <br />
        <button>Next</button>
      </form>
    </div>


  )
}

export default Phone