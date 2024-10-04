import {React, useState} from 'react'

const ComentarioItem = ({comentario, calificacion}) => {
  //Manejo del estado de un comentario
  //comentario y calificacion como atributos
  //mediante el uso de ESTADOS
  const [comment, setComment] = useState(comentario)
  const [rating, setRating] = useState(calificacion)
  
  const cambiarRating = () => {
    //Cambia la calificación del comentario
    setRating((prev)=> prev + 1 )
  }


    return (
    <div className='card'>
      <div className='num-display'>
        {rating}
      </div>
      <div className='text-display'>
        {comment}
      </div>
      <button onClick={cambiarRating}>
        Cambiar Calificacion
      </button>
    </div>
    
  );
}

export default ComentarioItem
