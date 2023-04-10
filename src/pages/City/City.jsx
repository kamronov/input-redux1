import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

function City() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector((state)=> state)
  const collect3 = (e)=>{
    e.preventDefault();
    if(e.target.city.value !== '' && e.target.country.value !== ''){
      navigate('/city')
      dispatch({
        type: 'city',
        payload:{
          city:e.target.city.value,
          country:e.target.country.value
        }
    })

    }
    console.log(selector);
  }

  return (
    <div>
      <h1>City</h1>
      <form onSubmit={collect3} action="#">
        <input type="text" name='city' placeholder='city'/> <br />
        <input type="text" name='country' placeholder='country'/> <br />
        <button>Get Info</button>
      </form>
    {selector.user[2].city!==''?<Footer/>:null}
    </div>
  )
}

export default City