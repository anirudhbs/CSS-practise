function toggleDisplay(id1, id2) {
  const current = document.getElementById(id1)
  const otherDiv = document.getElementById(id2)
  current.style.display = 'block';
  otherDiv.style.display = 'none';
  document.getElementById(id1).classList.add(`${id1}New`);
}
