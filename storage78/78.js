document.addEventListener("DOMContentLoaded", function() {
showUsers();
document.querySelector("#addUser").onclick = function(){
addUser();

};
document.querySelector("#clear").onclick = function(){
    clearAll();
};

});

class Kontakt {
    constructor(imie, nazwisko, telefon){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
    }
  
}


addUser = () => {
   let imie = document.querySelector("#imie").value;
   let nazwisko = document.querySelector("#nazwisko").value;
   let telefon = document.querySelector("#telefon").value;

   let kontakt = new Kontakt(imie, nazwisko, telefon);

   let daneJSON = localStorage.getItem("KT"); // pobieramy wartość ze storage gdzie klucz jest KT

   let daneObject = JSON.parse(daneJSON); // przekształcenie JSON na objekt JS

   if(daneObject == null){
        let dane = [];
        dane.push(kontakt);
        localStorage.setItem("KT", JSON.stringify(dane)); // konwertujemy objekt na JSON czyli txt
   }
   else{
       daneObject.push(kontakt);//dodajemy nowy kontakt do tablicy pobranej ze storage
       localStorage.setItem("KT", JSON.stringify(daneObject)); // wysyłamy spowrotem zaktualizowaną tablicę do storage

   }
   showUsers();

}

showUsers = () =>{
    let daneJSON = localStorage.getItem("KT");
    let daneObject = JSON.parse(daneJSON);
    let html = "";
    if(daneObject != null){
    html += "<ul>"; //wstrzykiwanie html dynamicznie z poziomu JS
    for(let x of daneObject){
        html += "<li>";
        html += `Imię: ${x.imie} Nazwisko: ${x.nazwisko} Telefon:${x.telefon}`;
        html += "</li>";

    }
    html += "</ul>";
    }
    document.querySelector("#showUser").innerHTML = html;



}

clearAll = () =>{
localStorage.clear();
showUsers();
}