function myFunction() {
  const ul = document.getElementById('ul');
  const li = document.createElement('li');
  const text = document.getElementById("myTask").value;

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  checkbox.addEventListener('click', doorStrepen);

  function doorStrepen() {
    if (checkbox.checked == true) {
      li.style.textDecoration = "line-through";
    } else if (checkbox.checked == false) {
      li.style.textDecoration = "none";
    }
  }

  const deletepic = document.createElement('img');
  deletepic.src = "delete.jpg";

  deletepic.addEventListener("click", deleteItem);
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(text));
  li.appendChild(deletepic);
  ul.appendChild(li);
  function deleteItem() {
    document.getElementById("ul").removeChild(li);
  }
}






