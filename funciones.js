$(function()
{
	$("#enviar").click(presionSubmit);

	function presionSubmit()
	{
	  var v=$("#nro").attr("value");
	  $.ajax({
			   async:true,
			   type: "POST",
			   dataType: "html",
			   contentType: "application/x-www-form-urlencoded",
			   url:"pagina1.php",
			   data:"numero="+v,
			   beforeSend:inicioEnvio,
			   success:llegadaDatos,
			   timeout:4000,
			   error:problemas
			 }); 
	  return false;
	}

	function inicioEnvio()
	{
	  alert('Iniciar envío...');
	  var x=$("#resultados");
	  x.html('<img src="../cargando.gif">');
	}

	function llegadaDatos(datos)
	{
	  $("#resultados").text(datos);
	}

	function problemas()
	{
	  $("#resultados").text('Problemas en el servidor.');
	}
})
/*
var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#enviar");
  x.click(presionSubmit);
}

function presionSubmit()
{
  var v=$("#nro").attr("value");
  $.ajax({
           async:true,
           type: "POST",
           dataType: "html",
           contentType: "application/x-www-form-urlencoded",
           url:"pagina1.php",
           data:"numero="+v,
           beforeSend:inicioEnvio,
           success:llegadaDatos,
           timeout:4000,
           error:problemas
         }); 
  return false;
}

function inicioEnvio()
{
  var x=$("#resultados");
  x.html('<img src="../cargando.gif">');
}

function llegadaDatos(datos)
{
  $("#resultados").text(datos);
}

function problemas()
{
  $("#resultados").text('Problemas en el servidor.');
}
*/
