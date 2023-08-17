import '../assets/css/navbar.css';
function Logo({props}) {
  return (
    <div className="navbar-logo">
      <a href={props.href}>
        <img className="navbar-logo-img" src={props.src} alt={props.alt}/>
      </a>
    </div>
  )
}

function Item({props}) {
  return(
    <>
      <a className="navbar-secciones-item" href={props.href}>{props.name}</a>
    </>
  )
}

function Secciones({props}) {
  let items = props.items;
  let numeroItems = items.length;
  let unionItems = [];

  for (let i = 0; i < numeroItems -1; i++) {
    unionItems.push(<Item props={{href : items[i].href, name: items[i].name}} />);
    unionItems.push(<span className='navbar-secciones-barra'>|</span>);
  }
  unionItems.push(<Item props={{href: items[numeroItems - 1].href, name: items[numeroItems -1].name}} />);
  return <div className="navbar-secciones"> {unionItems}</div>;
}

const items = [
  {href: "#", name: "Inicio"},
  {href: "#", name: "Sobre Nosotros"},
  {href: "#", name: "Productos"},
  {href: "#", name: "Contacto"},
];

function User ({props, auth}){
  if({auth}){
    // Se muetsra la foto de perfil del usuario
  }else{
    return <div>
      <a href={props.url}>
        <img src={require("../assets/img/no-auth-icon.png")} alt="Login"></img>
      </a>
    </div>
  }
}

export default function Navbar({props}) {
  const auth = false;
  return <div className="navbar">
    <Logo props={{href: props.homeUrl, src: props.logoSrc, alt: props.tituloWeb}} />
    <Secciones props={{items: items}} />
    <User props={{url: props.loginUrl}} auth={auth} />
  </div>
}