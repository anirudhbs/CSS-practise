function toggle(id) {
  const current = document.getElementById(id)
  const other = document.getElementsByClassName('single')
  const divArray = []
  for(let ar_i = 0; ar_i< other.length; ar_i++) divArray.push(other[ar_i])
  const otherDivs = divArray.filter((current) => current.id !== id)
  otherDivs.map((current) => {
    current.style.width = '0%'
  })
  current.style.width = '100%'
}