class Hotel {
    constructor(name, city, rooms, booked, gym) {
      this._name = name;
      this._city = city;
      this._rooms = rooms;
      this._booked = booked;
      this._gym = gym;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get city() {
      return this._city;
    }
  
    set city(city) {
      this._city = city;
    }
  
    get rooms() {
      return this._rooms;
    }
  
    set rooms(rooms) {
      this._rooms = rooms;
    }
  
    get booked() {
      return this._booked;
    }
  
    set booked(booked) {
      this._booked = booked;
    }
  
    get gym() {
      return this._gym;
    }
  
    set gym(gym) {
      this._gym = gym;
    }
  
    roomTypes = ["twin", "double", "suite"];
    swimmingPool = false;
    airportShuttle = false;
    restaurants = new Map([
      ["Donde La Arepa", "Colombian"],
      ["Casa Ramen", "Japanese"],
      ["Pizza Hermosa", "Italian"]
    ]);
  
    bookRoom() {

      if (this._booked < this._rooms) {
        this._booked++;
        console.log(`Room booked. There are ${this._rooms - this._booked} rooms remaining for booking.`);
        document.getElementById("booked").innerHTML = `There are ${this._rooms - this._booked} rooms remaining for booking.`;
        document.getElementById("canceled").style.display = 'none';
        document.getElementById("booked").style.display = 'block';
        document.getElementById("booked").style.color = 'green';
        if (this._booked === this._rooms) {
          alert("No hay más habitaciones disponibles.");
        }
      }
    
    }
 
  
    cancelRoom() {
      if (this._booked > 0) {
        this._booked--;
        console.log(`Room cancelled. There are ${this._rooms - this._booked} rooms remaining for booking.`);    
        document.getElementById("canceled").innerHTML = `There are ${this._rooms - this._booked} rooms remaining for booking.`;
        document.getElementById("booked").style.display = 'none';
        document.getElementById("canceled").style.display = 'block';
        document.getElementById("canceled").style.color = 'green';
        if (this._booked === 0) {
          alert("Todas las habitaciones están disponibles de nuevo.");
        }
      }
    
    }

    
  }


  
  
  function book(){
    hotel.bookRoom();
    const message = document.getElementById("booked");
    message.textContent = `Room booked. There are ${hotel.rooms - hotel.booked} available / ${hotel.rooms}.`;
    
  }
  
  
  function cancel() {
  
    hotel.cancelRoom();
    const message = document.getElementById("canceled");
    message.textContent = `Room cancelled. There are ${hotel.rooms - hotel.booked}  available / ${hotel.rooms}.`;
  }
  


  /*instancia de la clase hotel*/

  const hotel = new Hotel("Medellin Plus", "Medellin", 30, 0, true);

   /*instancia de la clase*/

    /*pruebas en consola*/
// console.log(hotel.bookRoom());
// console.log(hotel.cancelRoom());
// console.log(hotel._name + hotel._city + hotel._booked + hotel._rooms + hotel.gym);
 /*instancia de la clase*/

// let info = hotel._name + " " +  hotel._city + " " + hotel._booked + " " +  hotel._rooms + " " + hotel.gym;

let nombre = hotel._name;


document.getElementById("nombre").innerHTML = nombre;
document.getElementById("nombre").style.fontWeight = "700";

document.getElementById("localization").innerHTML = hotel._city;
document.getElementById("localization").style.fontWeight = "700";

document.getElementById("habitaciones").innerHTML = hotel.roomTypes;
document.getElementById("habitaciones").style.fontWeight = "700";

document.getElementById("shuttle").innerHTML = " " + hotel.airportShuttle;
document.getElementById("shuttle").style.fontWeight = "700";

document.getElementById("piscina").innerHTML = " " + hotel.swimmingPool;
document.getElementById("piscina").style.fontWeight = "700";


/* aqui inicio con la impresion en html de la lista de restaurantes*/

let list = document.getElementById("lista");

for (let [key, value] of hotel.restaurants) {
// console.log(`${key}: ${value}`); 
const item = document.createElement("li");
item.textContent = `${key}: ${value}`;
item.style.fontWeight = "700";
list.appendChild(item);
}
/* aqui inicio con la impresion en html de la lista de restaurantes*/

  


/*inicio de la clase resort*/
class Resort extends Hotel {
  constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub) {
    super(name, city, rooms, booked, gym);
    this._resortType = resortType;
    this._beachFront = beachFront;
    this._kidsClub = kidsClub;
  }

  get resortType() {
    return this._resortType;
  }

  set resortType(resortType) {
    this._resortType = resortType;
  }

  get beachFront() {
    return this._beachFront;
  }

  set beachFront(beachFront) {
    this._beachFront = beachFront;
  }

  get kidsClub() {
    return this._kidsClub;
  }

  set kidsClub(kidsClub) {
    this._kidsClub = kidsClub;
  }

  bookRoom2() {

    if (this._booked < this._rooms) {
      this._booked++;
      console.log(`Room booked. There are ${this._rooms - this._booked} rooms remaining for booking.`);
      document.getElementById("reservada").innerHTML = `There are ${this._rooms - this._booked} rooms remaining for booking.`;
      document.getElementById("canceleda").style.display = 'none';
      document.getElementById("reservada").style.display = 'block';
      document.getElementById("reservada").style.color = 'green';
      if (this._booked === this._rooms) {
        alert("No hay más habitaciones disponibles.");
      }
    }
  
  }

  cancelRoom2() {
    if (this._booked > 0) {
      this._booked--;
      console.log(`Room cancelled. There are ${this._rooms - this._booked} rooms remaining for booking.`);    
      document.getElementById("canceleda").innerHTML = `There are ${this._rooms - this._booked} rooms remaining for booking.`;
      document.getElementById("reservada").style.display = 'none';
      document.getElementById("canceleda").style.display = 'block';
      document.getElementById("canceleda").style.color = 'green';
      if (this._booked === 0) {
        alert("Todas las habitaciones están disponibles de nuevo.");
      }
    }
  
  }

  
}
  /*instancia de la clase resort heredando de hotel*/
const resort = new Resort("El paraiso complejo", "Isla palma", 30, 0, false, "family", true, true);
const resort2 = new Resort("El paraiso complejo", "Isla palma", 50, 20, true, "family", true, true);



document.getElementById("nombreres").innerHTML = resort.name;
document.getElementById("nombreres").style.fontWeight = "700";

document.getElementById("localizationres").innerHTML = resort.city;
document.getElementById("localizationres").style.fontWeight = "700";

document.getElementById("beach").innerHTML = resort.beachFront;
document.getElementById("beach").style.fontWeight = "700";

document.getElementById("bar").innerHTML = resort.gym;
document.getElementById("bar").style.fontWeight = "700";

document.getElementById("bartrue").innerHTML = resort2.gym;
document.getElementById("bartrue").style.fontWeight = "700";




console.log(resort.name); // output: "Beach Resort"
console.log(resort.city); // output: "Miami"
console.log(resort.rooms); // output: 50
console.log(resort.booked); // output: 20
console.log(resort.gym); // output: true
console.log(resort.resortType); // output: "family"
console.log(resort.beachFront); // output: true
console.log(resort.kidsClub); // output: true



function book2() {
  resort.bookRoom2();
  let message2 = document.getElementById("reservada");
  message2.textContent = `Room booked. There are ${resort.rooms - resort.booked} available / ${hotel.rooms}.`;
}


function cancel2() {
  resort.cancelRoom2();
  let message2 = document.getElementById("canceleda");
  message2.textContent = `Room cancelled. There are ${resort.rooms - resort.booked} available / ${hotel.rooms}.`;
}


/*Boton de cambiode card*/

let card2 = document.getElementById("resort");
let showResort = document.getElementById("showResort");
let hideResort = document.getElementById("hideResort");

function showcard2(){

 card2.style.display = "block"
 hideResort.style.display ="block"
 showResort.style.display ="none"
}

function hidecard2(){

  card2.style.display = "none"
  hideResort.style.display ="none"
  showResort.style.display ="block"
 }

