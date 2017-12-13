function toggleDisplay(id) {
  const pages = document.getElementsByClassName('pages')
  const pagesArray = []
  for (let ar_i = 0; ar_i < pages.length; ar_i++)
    pagesArray.push(pages[ar_i])
  const otherDivs = pagesArray.filter((current) => current.id !== id)
  document.getElementById('banner').style.display = 'none'
  // document.getElementById('banner').style.zIndex = '-1'
  otherDivs.map((current) => {
    current.style.display = 'none'
  })

  const current = document.getElementById(id)
  current.style.display = 'block'
}
