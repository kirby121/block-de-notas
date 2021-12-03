const ls = localStorage,
d = document

export function getData(dataName) {
  /*Esta función retorna los datos guardados en el local storage con el nombre de llave especificado como parámetro*/
  let dataArr = []
  if(ls.getItem(dataName) == undefined) ls.setItem(dataName, JSON.stringify(dataArr)) // Si no existe ningún valor con ese nombre de llave, se crea el espacio en memoria y se sube un arreglo vacío
  let returnData = localStorage.getItem(dataName)
  return JSON.parse(returnData)
}

export function uploadData (oldData, newData, dataName) {
  /*Esta función inserta un elemento a un array dado y lo sube al local storage*/
  const dataArr = oldData
  dataArr.push(newData)
  ls.setItem(dataName, JSON.stringify(dataArr))
}

export function uploadOneElement(element, key) {
  /*Esta función sube un elemento al local storage*/
  ls.setItem(key, JSON.stringify(element))
}
// uwun't
