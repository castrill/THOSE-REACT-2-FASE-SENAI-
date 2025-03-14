import { useState } from 'react'
import './AnoBissexto.css'

function AnoBissexto(){

    const  [resultado, setResultado] = useState('Resultado não calculado')

    function lerAno(){
        let ano = Number(prompt('Digite o ano:'))
        if(ano % 4 == 0){
            setResultado('É bissexto')
        }else{
            setResultado('não é bissexto')
        }

    }

    return (
        <div className="container-anoBissexto"> 
        <h2 className='letraAno'>AnoBissexto</h2>

        <button className="go" onClick={lerAno}>Informar Ano</button>
        <p>
        <div className='container-Bi'>

        {resultado}
        </div>
        </p>
        </div>
    )
}

export default AnoBissexto