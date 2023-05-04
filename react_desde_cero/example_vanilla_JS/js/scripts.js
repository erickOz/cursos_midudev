//Vanilla JS

//recuperamos el botón
const button = document.querySelector('button');



button.addEventListener('click', function () {
  const id = button.getAttribute('data-id');

  if (button.classList.contains('liked')) {
    button.classList.remove('liked');
    button.innerText = "Me Gusta";
  } else {
    button.classList.add('liked');
    button.innerText = "No Me Gusta";
  }

})



