function toggleDisplay(id) {
  const current = document.getElementById(id)
  const banner = document.getElementById('zero')
  if (banner.style.width !== '0%') banner.style.width = '0%'
  const other = document.getElementsByClassName('single')
  const divArray = []
  for (let ar_i = 0; ar_i < other.length; ar_i++) divArray.push(other[ar_i])
  const otherDivs = divArray.filter((current) => current.id !== id && !current.classList.contains('zero'))
  otherDivs.map((current) => {
    current.style.width = '0%'
  })
  current.style.width = '100%'
}

function toggleApply(id) {
  const current = document.getElementById(id)
  const other = document.getElementsByClassName('single')
  const divArray = []
  for (let ar_i = 0; ar_i < other.length; ar_i++) divArray.push(other[ar_i])
  const otherDivs = divArray.filter((current) => current.id !== id)
  otherDivs.map((current) => {
    current.style.width = '0%'
  })
  current.style.width = '100%'
}

const m = document.querySelector(".navbar-short")
m.addEventListener("click", function () {
  console.log('clicked')
  const a = document.getElementById("navbar")
  if (a.classList.contains("active")) {
    a.classList.remove("active")
  } else {
    a.classList.add("active")
  }
})
