var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var listaAsistencia = $("#asistencia");

var cargarPagina = function () {
  cargarLista();
};


var plantillaAlumna = "<li>"+ "__nombre__ " + "__apellidoP__ "+ "__apellidoM__"+
      "<br> __squad__"+
      "<input type='checkbox'>"+
      "</li>";

var cargarLista = function () {
  $.getJSON(api.url, function (alumnas) {
    alumnas.forEach(mostrarAlumnas);
  });
};

var mostrarAlumnas = function (alumna) {
  var nombre = alumna.name;
  var apellidoP = alumna.pLastName;
  var apelidoM = alumna.mLastName;
  var squad = alumna.squad.name;
  var plantillaFinal = "";

  plantillaFinal += plantillaAlumna.replace("__nombre__", nombre)
  .replace("__apellidoP__", apellidoP)
  .replace("__apellidoM__", apelidoM)
  .replace("__squad__", squad);

  listaAsistencia.append(plantillaFinal);
};

$(document).ready(cargarPagina);
