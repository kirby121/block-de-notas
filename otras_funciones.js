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

  // Esta funció  cambia el título al presionar el botón de confirmar luego de modificar una nota. Si el contenido está vacío, dirá "Debes ingresar un contenido", y si hay un contenido, dirá "Mis notas"

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