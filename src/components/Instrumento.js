import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Instrumento = () => {
    let {id} = useParams();
  return (
    <div>Instrumento {id}
        {/* <Link to='./Instrumento'><p>pruerba</p> </Link> */}
    </div>
  )
}

export default Instrumento