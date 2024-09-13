/* aca en esta porcion estamos llamado la api*/

let apikey = '552ede3c087c5810a2bbbf22dfea5b8c';
let lat = 6.25184;
let long = -75.56359;

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apikey}`;

const MakApiCall = async () => {
let response = await fetch(url);
let data = await response.json();

let cityName = data.name;
let tempCelsius = data.main.temp;

let container = document.getElementById("clima");
container.innerHTML = `In ${cityName}  ${tempCelsius} °C`;

 console.log("hasta aca funciona");



 let iconcode = data.weather[0].icon;
 let icon_image = "http://openweathermap.org/img/w/" + iconcode + ".png";
 console.log(data.weather[0].main);
 $("#image_clima").attr("src", icon_image);
 console.log($("#image_clima").attr("src"));
 console.log(icon_image);

}

 MakApiCall();

/* aca en esta porcion  temrinamos estamos llamado la api*/































 



/* aca en esta porcion estamos oculatando de entrada el boton logout*/

window.addEventListener('load', function() {
  document.querySelectorAll('.btn-outline-success')[1].style.display = 'none';
});

/* aca termina la porcion donde estamos oculatando de entrada el boton logout*/














/* aca inicia la porcion donde estamos creado las variables para nuestro formulario sus mensajes de error*/


const form = document.querySelector('form');
const firstNameInput = document.getElementById('fisrtName');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const postalCodeInput = document.getElementById('postalcode');
const phoneNumberInput = document.getElementById('phonenumber');
let mensajeError = document.querySelector('.mensaje-error');
let PrimerNombre = document.getElementById("primerNombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let codigopostal = document.getElementById("codigopostal");
let telefono = document.getElementById("telefono");

/* aca finaliza la porcion donde estamos creado las variables para nuestro formulario sus mensajes de error*/

/* aca en esta porcion estamos MOSTRANDO LA MODAL DEL FORMULARIO*/


var modal = document.querySelector('#staticBackdrop');
var modalBootstrap = new bootstrap.Modal(modal);

function muestre(){
  modalBootstrap.show();

};

/* FINAL DE LA PORCION QUE MUESTRA LA MODAL DEL FORMULARIO*/



/* aca en esta porcion creando la funcion donde valido LA INFORMACION DEL FORMULARIO esta esta asignada al boton 22 en html*/

/* ACA INICIA LA FUNCION PARA VALIDAR  */

function mostrar(event){

  // Validar cada entrada del formulario con expresiones regulares
   const firstNameRegex = /^[^\s]{2,16}$/;
    const lastNameRegex = /^[^\s]{2,16}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ageRegex = /^(?:1[0-9]{2}|[1-9][0-9]|[0-9])$/;
    const postalCodeRegex = /^[A-CEGHJ-NPR-TVXY]\d[A-CEGHJ-NPR-TV-Z](?:\s)?\d[A-CEGHJ-NPR-TV-Z]\d$/i;
    const phoneNumberRegex = /^\d{3}[ -]?\d{3}[ -]?\d{4}$/;
   
    let isValid = true;

  

     if(!firstNameRegex.test(firstNameInput.value)){
        // Si el nombre es invalido, mostrar mensaje de error
        console.log('Por favor, ingrese un nombre valido');
        isValid = false;
        mensajeError = document.querySelector('.mensaje-error');
        mensajeError.classList.add("mensaje-error");        
        mensajeError.style.display = 'block';
       //  firstNameInput.value.reset();
       firstNameInput.classList.add('is-invalid'); 
       firstNameInput.reset();      
     }



   if (!lastNameRegex.test(lastNameInput.value)) {
      // Si el apellido es invalido, mostrar mensaje de error
         console.log('Por favor, ingrese un apellido valido');
         isValid = false;
         mensajeError = document.querySelector('.mensaje-error-apellido');
         mensajeError.classList.add("mensaje-error-apellido");
         mensajeError.style.display = 'block';   
         lastNameInput.classList.add('is-invalid');     
     }
   
     if (!emailRegex.test(emailInput.value)) {
       // Si el correo electronico es invalido, mostrar mensaje de error
       console.log('Por favor, ingrese un correo electronico valido');
       isValid = false;
       mensajeError = document.querySelector('.mensaje-error-email');
       mensajeError.classList.add("mensaje-error-email");
       mensajeError.style.display = 'block';
       emailInput.classList.add('is-invalid');  
      }
   
     if (!ageRegex.test(ageInput.value)) {
       // Si la edad es invalida, mostrar mensaje de error
         console.log('Por favor, ingrese una edad valida');
        isValid = false;
        mensajeError = document.querySelector('.mensaje-error-edad');
        mensajeError.classList.add("mensaje-error-edad");
        mensajeError.style.display = 'block';
        ageInput.classList.add('is-invalid');  
     }
   
      if (!postalCodeRegex.test(postalCodeInput.value)) {
        // Si el codigo postal es invalido, mostrar mensaje de error
        console.log('Por favor, ingrese un codigo postal valido');
        isValid = false;
        mensajeError = document.querySelector('.mensaje-error-postal');
        mensajeError.classList.add("mensaje-error-postal");
        mensajeError.style.display = 'block';
        postalCodeInput.classList.add('is-invalid');  
      }
   
      if (!phoneNumberRegex.test(phoneNumberInput.value)) {
        // Si el numero de telefono es invalido, mostrar mensaje de error
        console.log('Por favor, ingrese un numero de telefono valido');
        isValid = false;
        mensajeError = document.querySelector('.mensaje-error-telefono');
        mensajeError.classList.add("mensaje-error-telefono");
        mensajeError.style.display = 'block';
        phoneNumberInput.classList.add('is-invalid');  
      }
      
   
      if (isValid) {
        // Si todas las entradas son validas, mostrar ventana modal
       
       
       modalBootstrap.hide();
      
       document.querySelectorAll('.btn-outline-success')[0].style.display = 'none';
       document.querySelectorAll('.btn-outline-success')[1].style.display = 'block';       
       let logout = document.getElementById("logout").style.backgroundColor = 'red';
       let carusuario = document.getElementById("cardusuario");
       carusuario.style.display = 'block';
      
       PrimerNombre = document.getElementById("primerNombre").innerHTML = firstNameInput.value;
       apellido = document.getElementById("apellido").innerHTML = " " +  lastNameInput.value;
       edad = document.getElementById("edad").innerHTML = " " + ageInput.value;
       edad = document.getElementById("edad").style.color = 'green';
       codigopostal = document.getElementById("codigopostal").innerHTML = " " + postalCodeInput.value;
       codigopostal = document.getElementById("codigopostal").style.color = 'red';
       telefono = document.getElementById("telefono").innerHTML = " " + phoneNumberInput.value;
       telefono = document.getElementById("telefono").style.color = 'blue';
       let saludoDiv = document.getElementById("saludo");
       saludoDiv.innerHTML = "welcome " + firstNameInput.value + "  " + lastNameInput.value;
      
     


      }
   
      // Prevenir el envio del formulario si hay entradas invalidas
      if (!isValid) {
        event.preventDefault();
  
  
                     
      }

          
}

function logout(){

  modalBootstrap.hide(); 
  document.querySelectorAll('.btn-outline-success')[1].style.display = 'none';
  document.querySelectorAll('.btn-outline-success')[0].style.display = 'block';
  carusuario = document.getElementById("cardusuario");
  carusuario.style.display = 'none';
  let saludoDiv = document.getElementById("saludo");

  // location.reload();


  

}
/* aca en esta porcion FINALIZA LA  VALIDANDO LA INFORMACION DEL FORMULARIO*/


























/* aca inicia la tercera seccion*/



const card = [`

<div class="card mb-3" ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg" class="img-fluid rounded-start mt-3 mb-3 ml-2" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title mt-3 mb-3">Standard</h5>
        <p class="card-text mt-3 mb-3"> <hr></p>
        <p class="card-text mt-3 mb-3 fw-600">Single room in a bed.</p>
        <h4 class="card-text mt-3 mb-3 fw-bold">$ 100</h4>
        <a href="#seccionbooking">
              <button type="button" id="boton1" class="btn btn-success mt-3 mb-3 mr-auto">Book Room</button>
        </a>
        
      </div>
    </div>
  </div>
</div>
`,
`

<div class="card mb-3" ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.hotel.de/de/media/image/2c/64/e1/RYOKAN_Hamanako_Kanzanji_Onsen_Sansuikan_Kinryu-Hamamatsu-shi-Doppelzimmer_Standard-5-730259_600x600.jpg" class="img-fluid rounded-start mt-3 mb-3 ml-2" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title mt-3 mb-3">Double</h5>
      <p class="card-text mt-3 mb-3"> <hr></p>
      <p class="card-text mt-3 mb-3 fw-600">Double room with a bed.</p>
      <h4 class="card-text mt-3 mb-3 fw-bold">$ 200</h4>
      <a href="#seccionbooking">
      <button type="button"  id="boton2" class="btn btn-success mt-3 mb-3 mr-auto">Book Room</button>
      </a>
      </div>
    </div>
  </div>
</div>
`,
`

<div class="card mb-3" ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://images.trvl-media.com/lodging/43000000/42510000/42505000/42504908/cb3883b0.jpg?impolicy=resizecrop&rw=598&ra=fit" class="img-fluid rounded-start mt-3 mb-3 ml-2" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title mt-3 mb-3">PentHouse</h5>
      <p class="card-text mt-3 mb-3"> <hr></p>
      <p class="card-text mt-3 mb-3 fw-600">King size bed, bar, jacuzzi</p>
    
      <h4 class="card-text mt-3 mb-3 fw-bold">$ 500</h4>
      <a href="#seccionbooking">
      <button type="button"  id="boton3" class="btn btn-success mt-3 mb-3 mr-auto">Book Room</button>
      </a>
      </div>
    </div>
  </div>
</div>
`


]

for(i=0; i < card.length;i++){

    console.log(card[i]);
    document.getElementById('cardsContainer').innerHTML = card + '</br>';
    document.getElementById("boton1").addEventListener("click",Standard);
    document.getElementById("boton2").addEventListener("click",Double);
    document.getElementById("boton3").addEventListener("click",PentHouse);
}




function Standard(){

  alert("you room is $ 100 per night")
}

function Double(){

  alert("you room is $ 200 per night")
}
function PentHouse(){

  alert("you room is $ 500 per night")
}








/* aca finaliza  la tercera seccion*/





























