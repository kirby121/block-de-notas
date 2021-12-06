import { btnHoverImg, crearNotaBtn, devolverValorInput, expandirMenu, mostrarMenu, mostrarNotas, ventanaEmergente } from "./botones.js";
import searchFilter from "./filtro_busquedas.js";
import { getData, uploadData, uploadOneElement } from "./ls.js";
import { cambiarTexto, cambiarTituloEditor, cambiarTituloVentanaEmergente, insertarValorTextarea, mostrarElemento, ocultarElemento } from "./otras_funciones.js";
import { crearNotasDom, crearObjeto, crearUltimaNotaDom, Nota } from "./POO.js";

const d = document,
claseNotas = Nota;

let titulo = "No hay título"

d.addEventListener("DOMContentLoaded", e => {
  
  cambiarTituloEditor(".campo-notas textarea", ".create", "h1", ".create img", "confirm.webp", cambiarTexto)
  ventanaEmergente(".create", ".elegirTitulo button", ".centrar", ".create img", "edit.webp", "confirm.webp")
  searchFilter(".buscador", ".nota")
  crearNotaBtn(".create", ".index", ".campo-notas","edit.webp","confirm.webp")
  btnHoverImg(".create", "invert")
  btnHoverImg(".menu", "invert")
  mostrarNotas(getData, ".nota", ".index", ".campo-notas", ".create img", "confirm.webp", ".create", insertarValorTextarea, ".campo-notas textarea", cambiarTexto, "h1", uploadOneElement)
  expandirMenu(".menu","menu-activo", ".menu-oculto")
  mostrarMenu(".menu", ".menu-oculto",mostrarElemento, ocultarElemento, ".create img", "edit.webp", "confirm.webp")
  cambiarTituloVentanaEmergente(cambiarTexto, "h1", ".elegirTitulo input", ".elegirTitulo button")

  /*Código que no está en módulos uwun't */


  const $btnTitulo = d.querySelector(".elegirTitulo button"),
  $crearObjetoNotaBtn = d.querySelector(".create"),
  $crearObjetoNotaBtnImg = d.querySelector(".create img"),
  $inputTitulo = d.querySelector(".elegirTitulo input"),
  $titulo = d.querySelector("h1"),
  $notas = d.querySelectorAll(".nota"),
  $inputContenido = d.querySelector(".input-notas")
  
  let $contenidoNotas = d.querySelectorAll(".nota p")

  $btnTitulo.addEventListener("click", e => {
    titulo = devolverValorInput(".elegirTitulo input")
  })
  
  $crearObjetoNotaBtn.addEventListener("click", e => {

    if ($crearObjetoNotaBtnImg.getAttribute("src") == "edit.webp"){
      
      if($titulo.textContent.includes("Editando: ")){

        let notasGuardadasEditando = getData("notas"),
        nuevaNota = notasGuardadasEditando[getData("index")]

        nuevaNota.content = $inputContenido.value

        const nuevoArreglo = []

        notasGuardadasEditando.forEach((el, index) => {
          (index == getData("index"))
          ? nuevoArreglo.push(nuevaNota)
          : nuevoArreglo.push(el)
        });

        uploadOneElement(nuevoArreglo, "notas")

        $contenidoNotas = d.querySelectorAll(".nota p")

        $contenidoNotas[getData("index")].textContent = nuevoArreglo[getData("index")].content
        
        $inputTitulo.value = ""
        $inputContenido.value = ""

        
      }

      else{

        
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
    }
  })

})

let notasGuardadas = getData("notas")

if (notasGuardadas.length === 0){
  uploadData([], crearObjeto(claseNotas, "Tutorial de uso UwU", "Veo que es tu primera vez entrando...") , "notas")
}

crearNotasDom(getData("notas"), "nota", ".notas")