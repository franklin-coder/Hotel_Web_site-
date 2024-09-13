/*aqui llamo a la funcion ready y el datapicker*/

$(document).ready(function() {
    $('.datepicker').datepicker();
    
    $('#book-room').on('click', function() {
      var arrivalDate = new Date($('#arrival').val()); //capturo value de la entreda el de la fecha entrada
      var departureDate = new Date($('#departure').val()); //capturo value de la entreda el de la fecha salida
      var days = Math.ceil((departureDate - arrivalDate) / (1000 * 60 * 60 * 24)); //calculo la cantidad de dias restando fecha de entrada menos fecha salida
      
      var roomType = $('input[name="roomtype"]:checked').attr('id'); // llama todos los id que estan checkeados en los inputs con el nombre room ytpe
      var pricePerDay;
      if (roomType === 'standard') {
        pricePerDay = 100;
      } else if (roomType === 'double') {
        pricePerDay = 200;
      } else if (roomType === 'penthouse') {
        pricePerDay = 500;
      }
      
      var totalPrice = days * pricePerDay; // aca estoy calculando el costo de los dias por el precio 
      var priceConfirmation = 'Total Price: $' + totalPrice; // aca creo variable para almacenar el total del precio
      $('#price-confirmation').text(priceConfirmation); // aca escribo en el dom en el p que tengo en html el total mostrando la variable que cree anteriormente
      
      var bookingConfirmation = 'You have booked a ' + roomType + ' room from ' + $('#arrival').val() + ' to ' + $('#departure').val(); //esta variable me almacena fechas de entrada y salida
      $('#booking-confirmation').text(bookingConfirmation); // aca escribo en el dom la variable de arriba fecha de entrada y salida

/* aca inicia el codigo para mostrar y escribir en la modal que muestra la reservacion*/
        const bookingInfo = document.getElementById("booking-info"); //llama el primer parrafo de la  reservacion
        const priceInfo = document.getElementById("price-info"); //llama el segundo parrafo de la  reservacion
        const welcome = document.getElementById("welcome"); // llama el saludo del titulo


        const bookingModal = new bootstrap.Modal(document.getElementById("booking-modal")); //llama  la modal de la reservacion
        bookingModal.show(); //muestra la modal de la reservacion


        welcome.innerText = "Thanks to make the reservation";
        bookingInfo.innerText = 'Total Price: $' + totalPrice;
        $('#price-confirmation').text(priceConfirmation); //llama el primer parrafo de la modal reservacion y le asigna la variable creada arriba
        priceInfo.innerText = 'You have booked a ' + roomType + ' room from ' + $('#arrival').val() + ' to ' + $('#departure').val();
         $('#booking-confirmation').text(bookingConfirmation);;


    
     
    });
  });


