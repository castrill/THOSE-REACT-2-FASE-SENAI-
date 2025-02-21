import './App.css'

function App() {




  let nome = "DEAL"

 function lerNome(){
  let nome = prompt('Digite o nome (não vai funcionar')
 }



  return (
    <>
    <h1>allahu akbar</h1>
    {nome}
    <button onClick={lerNome}>TROCAR NOME</button>
    </>
  )
}

export default App
