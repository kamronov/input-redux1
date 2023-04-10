import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
  const selector = useSelector((state)=> state)

  return (
    <div>
      <h1>User Information</h1>
      <h2>{selector.user[0].name}</h2>
      <h2>{selector.user[0].lastName}</h2>
      <h2>{selector.user[1].phone}</h2>
      <h2>{selector.user[1].age}</h2>
      <h2>{selector.user[2].city}</h2>
      <h2>{selector.user[2].country}</h2>
    </div>
  )
}

export default Footer