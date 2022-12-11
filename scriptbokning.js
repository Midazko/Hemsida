var namnfel = document.getElementById("Namn-fel")

var emailfel = document.getElementById("Email-fel")

var datumfel = document.getElementById("Datum-fel")

var tidfel = document.getElementById("Tid-fel")

var antalfel = document.getElementById("Antal-fel")

var fel = document.getElementById("Fel")

function valideringnamn(){
    var namn = document.getElementById("Namn").value;
    if (namn.length == 0){
        namnfel.innerHTML = "Skriv namn!";
        return false;
    }
    if(!namn.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        namnfel.innerHTML = "Hela namnet!"
        return false;
    }
    namnfel.innerHTML = '<i class="fa fa-check-circle-o"></i>';
    return true;
}

function valideringemail(){
    var email = document.getElementById("Email").value;
    
    if(email.length == 0){
        emailfel.innerHTML = "Skriv email!"
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailfel.innerHTML = "Ogiltig email!"
        return false;
    }
    emailfel.innerHTML = '<i class="fa fa-check-circle-o"></i>';
    return true;
}

function valideringdatum(){
    var datum = document.getElementById("datum").value;

    if(datum == ""){
        datumfel.innerHTML = "Välj datum"
        return false;
    }
    datumfel.innerHTML = '<i class="fa fa-check-circle-o"></i>';
    return true;
}

function valideringtid(){
    var tid = document.getElementById("tid").value;
    if (tid == ""){
        tidfel.innerHTML = "Välj tid!"
        return false;
    }
    tidfel.innerHTML = '<i class="fa fa-check-circle-o"></i>';
    return true;
}

function valideringantal(){
    var antal = document.getElementById("antal").value;
    if(antal == ""){
        antalfel.innerHTML = "Välj antal!"
        return false;
    }
    antalfel.innerHTML = '<i class="fa fa-check-circle-o"></i>';
    return true;
}

function valideringform(){
    if (!valideringnamn() || !valideringemail() || !valideringdatum() || !valideringtid() || !valideringantal()){
        fel.innerHTML = "Fyll ut formuläret.";
        return false;
    }
}
   