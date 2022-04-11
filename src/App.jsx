import './App.css';
import { Link, Outlet } from 'react-router-dom'

function App() {

  const homePage = "Pagina Inicial"

  return (
    <div className="App">
      <h1 className='h1'>{ homePage }</h1>
      <nav className='navigation'>
        <Link to="/cadastroUsuario" className='nav-item'>Cadastro</Link>
        <Link to="/login" className='nav-item'>Login</Link>
        {/* <Link to="/loggeduser" className='nav-item'>Usuario Logado</Link> */}
      </nav>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default App;