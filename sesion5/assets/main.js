//Inicializamos el codigo que nos brinda bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//=============== ALERTS==================
document.getElementById("btn-enviar").addEventListener("click", abc);

function abc() {
  document.getElementById("alert-div-fechaNacimiento").innerHTML="";
  let fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  fechaNacimiento = new Date(fechaNacimiento);

  let fechaActual = new Date();

  //Convertimos las fechas a milisegundos
  if (fechaActual.valueOf() < fechaNacimiento.valueOf()) {
    lanzarAlerta();
  }
};

function lanzarAlerta() {
  let alerta = document.getElementById("alert-div-fechaNacimiento");

  let div = document.createElement("div");
  div.className = "alert alert-danger alert-dismissible small py-1";
  div.role = "alert";

  let mensaje = document.createElement("div");
  mensaje.innerText="La fecha de nacimiento es incorrecto.";

  div.append(mensaje);

  let boton = document.createElement("button");
  boton.type = "button";
  boton.className = "btn-close pt-0 small";
  boton.setAttribute("data-bs-dismiss", "alert");
  boton.setAttribute("aria-label", "Close");

  div.append(boton);
  alerta.append(div);
}