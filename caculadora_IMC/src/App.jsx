import { data } from "./data/data";

import './App.css'

// componentes
import ImcCal from './components/ImcCal'
import { useState } from "react";
import Imc_table from "./components/Imc_table";

function App() {
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if(!weight || ! height) return;

    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +height.replace(",", ".")

    const imcResult = (weightFloat/(heightFloat*heightFloat)).toFixed(1);
    
    setImc(imcResult)
    
    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })
    
  }

  const resetCalc = (e) => {
    e.preventDefault()
    setImc('')
    setInfo('')
    setInfoClass('')
  }
  
  return (
    <>
      <div className='container'>
        {!imc ? <ImcCal calcImc={calcImc}/> : <Imc_table data={data} info={info} infoclass={infoClass} imc={imc} reset={resetCalc}/>}
      </div>
    </>
  )
}

export default App
