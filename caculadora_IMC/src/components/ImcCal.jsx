import { useState } from "react"

import "./imcCal.css"

import Button from "./Button"

const ImcCal = ({calcImc}) => {

        const [height, setHeight] = useState("")
        const [weight, setWeight] = useState("")

        const ClearForm = (e) => {
            e.preventDefault();
            setWeight("");
            setHeight("");
        }
        
        const validDigits = (text) => {
            return text.replace(/[^0-9,]/g, "")
        }

        const handleHeightChange = (e) => {
            const upvalues = validDigits(e.target.value)

            setHeight(upvalues)
        }

        const hadleWeightChange = (e) => {
            const upValue = validDigits(e.target.value)

            setWeight(upValue)
        }
  return (
    <div id="c-container">
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Exemplo... 1,80" onChange={handleHeightChange}
                    value={height}/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Exemplo... 75,1" onChange={hadleWeightChange}
                    value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular"  action={(e)=> calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={ClearForm}/>
                
            </div>
        </form>
    </div>
  )
}

export default ImcCal