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
  }
  unionItems.push(<Item props={{href: items[numeroItems - 1].href, name: items[numeroItems -1].name}} />);
  return <div className="navbar-secciones"> {numeroItems}</div>;
}

const items = [
  {href: "#", name: "Home"},
  {href: "#", name: "Sobre Nosotros"},
  {href: "#", name: "Productos"},
  {href: "#", name: "Contacto"},
];