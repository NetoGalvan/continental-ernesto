import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Container, Badge } from 'react-bootstrap';
import ListarCupones from '../components/ListarCupones';
import Cargando from '../components/Cargando';
import Buscador from '../components/Buscador';

const Cupones = () => {
  // Declaramos la url que consumiremos
  const urlCupones = 'https://continentalassist.co/backmin/restapp/test_consulta_cupones';

  // Grabar el estado
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.post(urlCupones)
    .then(response => {
      setList(response.data.resultado);
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])

  return (

    <Container fluid>
      <h1 className='text-center' >
        <Badge pill bg="primary">
          {list.length}
        </Badge> Cupones vigentes
      </h1>
      <div>
        <Buscador></Buscador>
      </div>
      <div>
        {
          list ? < ListarCupones cupones={list} /> : <Cargando/>
        }
      </div>
    </Container>


  )
}

export default Cupones;