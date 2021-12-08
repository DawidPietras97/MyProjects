document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("input[type='button']").onclick = function(){
        wyslij();
    }
});


wyslij = () =>{

    let imie = document.querySelector("input[name='imie']").value;
    if(imie === ""){
        document.querySelector("#error_imie").innerHTML = "Wypełnij pole";
    }
    else{
        document.querySelector("#imie").innerHTML = imie; 
        document.querySelector("#error_imie").innerHTML = "";
    }
   
    let nazwisko = document.querySelector("input[name='nazwisko']").value;
    if(nazwisko === ""){
        document.querySelector("#error_nazwisko").innerHTML = "Wypełnij pole";
    }
    else{
        document.querySelector("#nazwisko").innerHTML = nazwisko;
        document.querySelector("#error_nazwisko").innerHTML = "";
    }

    let miasto = document.querySelector("select[name='miasto']").value;
    if(miasto === ""){
        document.querySelector("#error_miasto").innerHTML = "Wypełnij";
    }
    else{
        document.querySelector("#miasto").innerHTML = miasto;
        document.querySelector("#error_miasto").innerHTML = "";
    }

    let techTab = document.querySelectorAll("input[type='checkbox']");
    let tech = [];
    for(let x of techTab){
        if(x.checked){
            tech.push(x.value);
        }
    }

    if(tech.length == 0){
        document.querySelector("#technologie").innerHTML ="Nic nie zaznaczono !!";
        document.querySelector("#error_technologia").innerHTML = "Wypełnij";
    }
    else{
        document.querySelector("#technologie").innerHTML = tech;
        document.querySelector("#error_technologia").innerHTML = "";
    }


    let stanowiskoTab = document.querySelectorAll("input[name='stanowisko']");
    let stanowisko = "";
    for(let x of stanowiskoTab){
        if(x.checked){
            stanowisko = x.value;
            break;
        }
    }

    if(stanowisko == ""){
        document.querySelector("#stanowisko").innerHTML ="Nic nie zaznaczono !!";
        document.querySelector("#error_stanowisko").innerHTML = "Wypełnij";
    }
    else{
        document.querySelector("#stanowisko").innerHTML = stanowisko;
        document.querySelector("#error_stanowisko").innerHTML = "";
    }


    let uwagi = document.querySelector("textarea[name='uwagi']").value;
    document.querySelector("#uwagi").innerHTML = uwagi;
    console.log(uwagi);




}