let iniciar = () =>
{
  let correo = document.getElementById("correo").value;
  let contrasena = document.getElementById("contrasena").value;
  let opcion = document.getElementById("opcion").value;

  if(correo == "" || contrasena == "")
  {
    alert("Introduzca valores válidos.");
  }
  else
  {
    window.location.href = `iniciar/${correo}/${contrasena}/${opcion}`;
  }

  
}