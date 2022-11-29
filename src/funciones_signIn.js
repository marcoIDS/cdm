
let arreglo = ["221254", "221256", "221277", "213691"];


let agregar = () =>
{
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let contrasena = document.getElementById("contrasena").value;
  let fecha = document.getElementById("fecha").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let radios = document.getElementsByName('sexo');
  let sexo;
  for (let radio of radios)
  {
    if (radio.checked) {
      sexo = radio.value;
    }
  } 
  
  let opcion = Math.floor(Math.random()*4);
  let coach = arreglo[opcion];
  if(nombre == "" || correo == "" || contrasena == "" || parseFloat(altura) < 1 || parseFloat(altura) > 2.5 || sexo == undefined || isNaN(altura) || isNaN(peso))
  {
    alert("Introduzca valores válidos.");
  }
  else
  {
    window.location.href = `agregar/${nombre}/${correo}/${contrasena}/${fecha}/${peso}/${altura}/${sexo}/${coach}`;
  }

  
}

