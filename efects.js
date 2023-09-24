// effects.js
async function cargarPaises() {
  const selectPais = document.getElementById('pais');
  const campoCelular = document.getElementById('celular'); // Obtén el campo de número de celular

  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name.common;
      option.textContent = country.name.common;
      
      // Verifica si 'country.callingCodes' está definido y no está vacío antes de agregar el código de país
      if (country.callingCodes && country.callingCodes.length > 0) {
        option.setAttribute('data-codigo', country.callingCodes[0]); // Agrega el código del país como atributo
      } else {
        console.warn(`El país ${country.name.common} no tiene un código de país válido.`);
      }

      selectPais.appendChild(option);
    });
  } catch (error) {
    console.error('Error al cargar la lista de países:', error);
  }
}

window.addEventListener('load', cargarPaises);

// Manejar el cambio en la selección de país
const selectPais = document.getElementById('pais');
const campoCelular = document.getElementById('celular');

selectPais.addEventListener('change', function() {
  const codigoPais = this.options[this.selectedIndex].getAttribute('data-codigo');
  
  if (codigoPais) {
    // Completar automáticamente el campo de número de celular con el código de país
    campoCelular.value = '+' + codigoPais;
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const miFormulario = document.getElementById('miFormulario');
  const enviarBtn = document.getElementById('enviarBtn');
  const resultado = document.getElementById('resultado');
  const formularioContainer = document.getElementById('formularioContainer');
  const nombreMostrado = document.getElementById('nombreMostrado');
  const luffy = document.getElementById('newLuffy');
  const programer = document.getElementById('programer');
  const myName = document.getElementById('myName');
  const myMessage = document.getElementById('myMessage');
  const myMessagetwo = document.getElementById('myMessagetwo');
  
  enviarBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Previene el envío del formulario por defecto
    
    //validamos los campos del formulario
    if (miFormulario.checkValidity() === false) {
      event.stopPropagation();
      miFormulario.classList.add('was-validated');
      alert("Todos los campos deben ser llenados");
      return;
    }



    const nombre = document.getElementById('nombres').value;
      // Oculta el formulario
      miFormulario.style.display = 'none';
      programer.style.display = 'none';
      myName.style.display = 'none';
      myMessage.style.display = 'none';

      // Muestra el resultado con una animación
      luffy.style.display = 'flex';
      myMessagetwo.style.display = 'flex';
      resultado.style.display = 'flex';
      resultado.style.animation = 'fadeIn 1s'; // Puedes definir tu propia animación CSS

      nombreMostrado.textContent = nombre;
   
  });
});

//Funcion para recargar la pagina al hacer click en el boton resetBtn
function Reload() {
  location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el elemento que deseas mostrar
  const elemento = document.getElementById('miElemento');

  // Espera 3 segundos (3000 milisegundos) y luego muestra el elemento
  setTimeout(function () {
      elemento.style.display = 'inline'; // O usa 'block' si es un bloque
  }, 2000);
});

