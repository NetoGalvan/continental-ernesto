import React, {useState, useEffect, Fragment} from 'react'
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import Resultado from '../components/Resultado';
import ListarCupones from '../components/ListarCupones';
import TotalCupones from '../components/TotalCupones';

const Buscador = () => {

    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState(null);
    const [list, setList] = useState(null);

    // Declaramos la url que consumiremos
    const urlCupones = 'https://continentalassist.co/backmin/restapp/test_consulta_cupones';

    // Obtenemos el dato del input
    const handleChange = e => {
      setBusqueda(e.target.value);
    }

    // Ejecutamos el request a la API
    const handleSearch = (e) => {

      const params = JSON.stringify({
        "codigo": busqueda,
      });

      axios.post(urlCupones, params)
        .then(function (response) {
          let res = response.data.resultado;

          if ( res == null ) {
            axios.post(urlCupones)
            .then(response => {
              setList(response.data.resultado);
              setResultado(null);
            })
            .catch(error=>{
              console.log(error)
            })
          } else {
            setResultado(response.data.resultado);
            setList(null);
          }

        })
        .catch(function (error) {
          console.log(error);
      });
    }

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
    <div>
      <h1 className='text-center' >
        <Badge pill bg="primary">
          {
            list ? <TotalCupones cupones={list} /> : <TotalCupones cupones={resultado} />
          }
        </Badge> Cupones vigentes
      </h1>

      <div className='col-md-6'>
          <div className="input-group mb-3">
          <input type="text"
          className="form-control"
          placeholder="Ingresa Código"
          aria-label="Ingresa Código"
          value={busqueda}
          onChange={handleChange}/>
          <div className="input-group-append">
              <button className="btn btn-outline-primary"
              type="button"
              onClick={handleSearch}>Button</button>
          </div>
          </div>
      </div>
      <div>
          {
          <Fragment>
            { resultado ? < Resultado cupones={resultado} /> : null }
            { list ? < ListarCupones cupones={list} /> : null }
          </Fragment>
          }
      </div>
    </div>

  )
}

export default Buscador;
