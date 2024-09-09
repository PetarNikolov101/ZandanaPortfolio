export default function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-">
  <a className="navbar-logo" href="#"><img className="logo" src="zandana_bejzh.png"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#About">ABOUT<span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Events">EVENTS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Games">GAMES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact">CONTACT</a>
      </li>
    </ul>

  
    <button className="btn btn-secondary lang-btn">MK</button>
    <button className="btn btn-secondary lang-btn">EN</button>

    
  </div>
  <hr></hr>
</nav>
    )
}