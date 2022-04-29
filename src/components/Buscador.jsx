import React, {useState} from 'react'
import axios from 'axios';
import ListarCupones from '../components/ListarCupones';
import Cargando from '../components/Cargando';

const Buscador = () => {

    const [busqueda, setBusqueda] = useState('');
    const [list, setList] = useState([]);

    // Declaramos la url que consumiremos
    const urlCupones = 'https://continentalassist.co/backmin/restapp/test_consulta_cupones';

    const handleChange = e => {
        setBusqueda(e.target.value);
    }

    const handleSearch = (e) => {
        console.log('click');
        axios.post(urlCupones,{
            codigo:busqueda
        })
          .then(function (response) {
            setList(response.data.resultado)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  return (
    <div>
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
                list ? < ListarCupones cupones={list} /> : <Cargando/>
            }
        </div>
    </div>

  )
}

export default Buscador;
