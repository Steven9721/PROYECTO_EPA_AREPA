import {React, useState} from 'react';
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
function App() {
    const {comments, 
        setComments} = useState(comentarios)




    const titulo = "App de Comentarios";
    const autor = "Porther López";
    const ficha = "2902093";
    const CentroFormacion = "Centro De Mercados y Logistica"
  

    const loading = false;
    const showComments = true; 

    if(loading === true) return (<h1>Cargando Comentarios...</h1>);


    return (
        <div className='container'>
        
            <Header titulo={titulo} autor={autor} ficha={ficha} CentroFormacion={CentroFormacion} />
          
            {showComments &&
            <div className='comments'>
            <h3>Comentarios: {comentarios.length}</h3>
            <ul>
                {
                comentarios.map(comentario => 
                    <ComentarioItem
                    key={comentario.id}
                    comentario={comentario.comentario}
                    calificacion={comentario.calificacion} />
                )
                }
            </ul>
        </div>
            
            
        }
            
        </div>
    );
}

export default App;