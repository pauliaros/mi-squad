function miSquad(nombreApellido,edad,hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
  	this.hobbies = hobbies;
}

var sopaipas = [];
var Marcela = new miSquad("Marcela Cabello",31,["Cantar", "Yoga", "Cocinar"]);
var Melissa = new miSquad("Melissa Pacheco",25,["Dormir", "Comer", "Matilda"]);
var Paulina = new miSquad("Paulina Aros",28,["Hacer libretas", "Acariciar Gatos", "Manicure"]);
var Karla = new miSquad("Karla Jeria",35,["Comer Chocolates", "Viajar","Ir al Cine"]);
var Tanya = new miSquad("Tanya Ramirez",29,["Gatos", "Viajar","Tomar tecito a las 4"]);
var Paula = new miSquad("Paula Ponce",28,["Música", "Aves","Heroes of the storm"]);
var Mariela = new miSquad("Mariela Cubillos",36,["Tejer", "Comer chocolate","Cocinar"]);
var Valentina = new miSquad("Valentina Amala Kamala",29,["Bordar", "Tejer","Dormir"]);

sopaipas.push(Marcela, Melissa, Paulina, Karla, Tanya, Paula, Mariela, Valentina);

var imprimir = document.getElementById("mi-squad");

sopaipas.forEach(function(persona){

    imprimir.innerHTML +=  '<b>Nombre y Apellido:</b> ' + persona.nombreApellido + '<br><b>Edad:</b> ' + persona.edad + "  años" + '<br><b>Hobbies: </b>';
    var listaHobbie =  persona.hobbies.forEach(function(miembro){
    	return (imprimir.innerHTML += miembro + " ")});
   imprimir.innerHTML += '<br>' ;
})