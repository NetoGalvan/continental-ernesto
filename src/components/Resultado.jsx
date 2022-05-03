import React from 'react';

const Resultado = ({cupones}) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Código</th>
                    <th scope="col">Porcentaje de descuento</th>
                    <th scope="col">Fecha desde</th>
                    <th scope="col">Fecha hasta</th>
                    <th scope="col">Estatus</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(cupones).map((key)=>(
                <tr key={cupones[key].id} >
                    <th scope="row">{cupones[key].id}</th>
                    <td>{cupones[key].codigo}</td>
                    <td>{cupones[key].porcentaje}</td>
                    <td>{cupones[key].fecha_desde}</td>
                    <td>{cupones[key].fecha_hasta}</td>
                    <td>{cupones[key].id_status}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default Resultado;