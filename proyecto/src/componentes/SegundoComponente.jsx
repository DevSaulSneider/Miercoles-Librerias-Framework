import { Mi_Titulo } from "./PrimerComponente";
export function Mi_componente() {

  let nombre = "Pedro";
  let curso = "Minecraft";
  let modulo = "Librerias y Frameworks";
  let framework = "Bootstrap";

  return (
    <div>
      <p className="titulo">Bienvenido {nombre}</p>
      <p>Mi nombre es {nombre} y estoy aprendiendo {framework} en el curso de {curso} en Crack The Code</p>
      <p>Actualmente estamos en el modulo {modulo}</p>

      <Mi_Titulo />
    </div>   
  )
}