import Boton from "./Boton"

const Header = ({ titulo }) => {

  const onClick = () => {
    console.log('click desde parent');
  }
    
  return (
    <header className="header">
        <h2> {titulo} </h2>
        <Boton color = 'green' text = 'Nueva' onClick = {onClick}/>
    
    </header>
  )
}

// const estilos = {
//     color: 'white', background: 'blue'
// }

export default Header