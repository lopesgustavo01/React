import React from 'react'
import Button from './Button'

import "./Imc_table.css"

const Imc_table = ({ data, imc, info, infoclass, reset }) => {
  return (
    <div id='result-container'>
      <p id='imc-number'>
        Seu IMC: <span className={infoclass}>{imc}</span>
      </p>
      <p id='imc-info'>
          Situaçao atual: {info}
      </p>
      <h3>Confira as classificaçoes</h3>
      <div id='imc-table'>
          <div className="table-header">
            <h4>IMC</h4>
            <h4>Classificaçao</h4>
            <h4>Obesidade</h4>
          </div>
          {data.map((item)=> (
            <div className="table-data" key={item.info}>
              <p>{item.classification}</p>
              <p>{item.info}</p>
              <p>{item.obesity}</p>
            </div>
          ))}
          <Button id="back-btn" text="Voltar" action={reset}/>  
      </div>
    </div>
  )
}

export default Imc_table