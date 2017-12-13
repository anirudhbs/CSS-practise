function toggleDisplay(id1, id2) {
  console.log('hello')
  const current = document.getElementById(id1)
  const otherDiv = document.getElementById(id2)
  current.style.display = 'block'
  otherDiv.style.display = 'none'
  document.getElementById(id1).classList.add(`${id1}New`)
}

// function showDiv(id1, id2) {
//   const current = document.getElementById(id1)
//   const otherDiv = document.getElementById(id2)
//   current.style.display = 'block'
//   otherDiv.style.display = 'none'
//   document.getElementById(id1).classList.add(`${id1}New`)
// }

// const current = document.getElementById('temp')
// current.addEventListener('click', showDiv('one', 'two'), false)
