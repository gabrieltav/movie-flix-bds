import './styles.css';
const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-md bg-primary main-nav">
      <div className='container-fluid'>
        <a href="link" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </a>
        <div className='colapse navbar-colapse '>
          <ul className='navbar-nav offset-md-2'>
            <li>
              <a href="link" className='main-logof'>Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
