export class Nota{ // Esta es la clase con la que se guardará cada nota. Tiene el título y el contenido
  constructor(title, content){
    this.title = title
    this.content = content
  }}

export function crearObjeto(clase, par1, par2) {
  return new clase(par1, par2)
}

export function crearNotasDom(notas, claseDiv, container) {

  // Esta función crea las etiquetas correspondientes a cada nota en el documento a partir de un arreglo pasado como parámetro. Se usa al cargar la página (queremos que se impriman todas las notas guardadas)

  notas.forEach(nota => {
    const d = document,
    $div = d.createElement("div"),
    $title = d.createElement("h2"),
    $content = d.createElement("p"),
    $container = d.querySelector(container)

    $div.appendChild($title)
    $div.appendChild($content)
    $div.classList.add(claseDiv)

    $title.textContent = nota.title
    $content.textContent = `${nota.content.slice(0,80)}...`

    $container.appendChild($div)
  });
}

export function crearUltimaNotaDom(notas, claseDiv, container) {

  // Esta función crea únicamente la etiqueta en el documento de la última nota del arreglo pasado como parámetro. Se usa al crear una nueva nota (queremos que cargue sólo esa, no todas)

  const nota = notas[notas.length - 1]

    const d = document,
    $div = d.createElement("div"),
    $title = d.createElement("h2"),
    $content = d.createElement("p"),
    $container = d.querySelector(container)

    $div.appendChild($title)
    $div.appendChild($content)
    $div.classList.add(claseDiv)

    $title.textContent = nota.title
    $content.textContent = `${nota.content.slice(0,80)}...`

    $container.appendChild($div)
}