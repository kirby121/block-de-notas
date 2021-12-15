const d = document

export function mostrarElemento(elemento) {
  const $elemento = d.querySelector(elemento)

  $elemento.classList.remove("none")
}

export function ocultarElemento(elemento) {
  const $elemento = d.querySelector(elemento)
  $elemento.classList.add("none")
}

export function insertarValorTextarea(textarea, value) {
  const $textarea = d.querySelector(textarea)
  $textarea.value = value
}

export function cambiarTexto(text, value) {
  const $text = d.querySelector(text)
  $text.textContent = value
}

export function cambiarTituloVentanaEmergente(funcion, titulo, input, btn) {

  //Esta función cambia el título de la página por el puesto en la ventana emergente

  const $btn = d.querySelector(btn),
  $input = d.querySelector(input)

  $btn.addEventListener("click", e => {
    ($input.value == "")  // Aquí se valida que el input no esté vacío
    ? funcion(titulo, "Debes ingresar un título")
    : funcion(titulo, $input.value)
  })
}

export function cambiarTituloEditor(textarea, btn, title, btnImg, img, funcion) {

  // Esta función cambia el título al presionar el botón de confirmar luego de modificar una nota. Si el contenido está vacío, dirá "Debes ingresar un contenido", y si hay un contenido, dirá "Mis notas"

  const $btn = d.querySelector(btn),
  $textarea = d.querySelector(textarea),
  $btnImg = d.querySelector(btnImg)

  $btn.addEventListener("click", e => {
    if ($btnImg.getAttribute("src") == img){
      ($textarea.value == "")
      ? funcion(title, "Debes ingresar un contenido")
      : setTimeout(() => {
        funcion(title, "Mis notas")  
      }, 200);
    }
  })
}

export function volverAIndex(index, editor, btnImg, inputTitulo, inputContenido, imgEditar, cambiarTitulo) {

  const $inputTitulo = d.querySelector(inputTitulo),
  $inputContenido = d.querySelector(inputContenido),
  $aparecer = d.querySelector(index),
  $desaparecer = d.querySelector(editor),
  $btnImg = d.querySelector(btnImg)

  $aparecer.classList.add("invisible")
      setTimeout(() => {
        $aparecer.classList.add("none")
        $desaparecer.classList.remove("none")
        setTimeout(() => {
          $desaparecer.classList.remove("invisible")
        }, 300); // Uso el setTimeOut porque la clase tiene una transición de 0.3 segundos (o 300 milisegundos)
      }, 300);
      $btnImg.setAttribute("src", imgEditar)

  $inputContenido.value= ""
  $inputTitulo.value= ""

  cambiarTitulo("h1", "Mis notas")

}

export function borrarNota(getData, uploadData, father, selector) {
  const elements = getData("notas"),
  $father = d.querySelector(father),
  $markups = d.querySelectorAll(selector)
  
  let index = getData("index"),
   $element = $markups[index]

  if($markups.length <= index){
    index = 0
    $element = $markups[index]
  } 

  $father.removeChild($element)

  const newArr = elements
  newArr.splice(index, 1)

  uploadData(newArr, "notas")
}

export function ocultarVentanaEmergente(btn, window) {
  const $window = d.querySelector(window),
  $btn = d.querySelector(btn)

  $btn.addEventListener("click", e => {

      $window.classList.add("invisible")
      setTimeout(() => {
        $window.classList.add("none")
      }, 300);
  })
}

export function contarCaracteres(input, separador) {
  const $input = d.querySelector(input)

  return $input.value.split(separador)
}