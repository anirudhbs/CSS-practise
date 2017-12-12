window.onload = function () {
  if (CSS.supports("(display:grid)")) {
    console.log('Supported')
  } else {
    console.log('Browser does not support CSS grid')
    window.location = 'http://www.geekskool.com/'
  }
}
