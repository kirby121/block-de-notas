import { aparecerElemento, btnHoverImg, crearNotaBtn, devolverValorInput, expandirMenu, ventanaEmergente } from "./botones.js";
import searchFilter from "./filtro_busquedas.js";
import { getData, uploadData } from "./ls.js";
import { crearNotasDom, crearObjeto, crearUltimaNotaDom, Nota } from "./POO.js";

const d = document,
claseNotas = Nota;

let titulo = "No hay título"

d.addEventListener("DOMContentLoaded", e => {
  searchFilter(".buscador", ".nota")
  crearNotaBtn(".create", ".index", ".campo-notas","https://media-public.canva.com/R9-Ts/MAA9p7R9-Ts/4/tl.png","https://media-public.canva.com/Shvr8/MAELO-Shvr8/1/tl.png")
  btnHoverImg(".create", "invert")
  btnHoverImg(".menu", "invert")
  expandirMenu(".menu","menu-activo", ".menu-oculto")
  aparecerElemento(".create", ".menu", ".menu-oculto", ".create img", "https://media-public.canva.com/Shvr8/MAELO-Shvr8/1/tl.png")
  // uploadData(["Hola"], "Mundo", "Prueba")
  // console.log(getData("Prueba"));
  ventanaEmergente(".create", ".elegirTitulo button", ".centrar", ".create img", "https://media-public.canva.com/Shvr8/MAELO-Shvr8/1/tl.png")

  /*Código que no está en módulos uwun't */

  const $btnTitulo = d.querySelector(".elegirTitulo button"),
  $crearObjetoNotaBtn = d.querySelector(".create"),
  $crearObjetoNotaBtnImg = d.querySelector(".create img"),
  $inputTitulo = d.querySelector(".elegirTitulo input"),
  $inputContenido = d.querySelector(".input-notas")

  $btnTitulo.addEventListener("click", e => {
    titulo = devolverValorInput(".elegirTitulo input")
  })

  $crearObjetoNotaBtn.addEventListener("click", e => {

    if ($crearObjetoNotaBtnImg.getAttribute("src") == "https://media-public.canva.com/R9-Ts/MAA9p7R9-Ts/4/tl.png"){

    if ($inputContenido.value == ""){
      alert("Debes ingresar algo")
    }
    else{
      uploadData(
        getData("notas"),
        crearObjeto(claseNotas, devolverValorInput(".elegirTitulo input"), devolverValorInput(".input-notas")), "notas")
        crearUltimaNotaDom(getData("notas"), "nota", ".notas")

        $inputTitulo.value = ""
        $inputContenido.value = ""
      }
    }
  })

})

let notasGuardadas = getData("notas")

if (notasGuardadas.length === 0){
  console.log("No existen notas");
  uploadData([], crearObjeto(claseNotas, "Tutorial de uso UwU", "Veo que es tu primera vez entrando...") , "notas")
}

crearNotasDom(getData("notas"), "nota", ".notas")