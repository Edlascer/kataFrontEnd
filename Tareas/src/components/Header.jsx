import Boton from "./Boton"

const Header = ({ titulo, onAdd, showAdd }) => {

  const onClick = () => {
    console.log('click desde parent');
  }
    
  return (
    <header className="header">
        <h2> {titulo} </h2>
        <Boton color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Cerrar' : 'Nueva'} onClick = {onAdd} />
    
    </header>
  )
}

// const estilos = {
//     color: 'white', background: 'blue'
// }

export default Header