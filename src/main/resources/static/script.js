
$(function (){
    hentAlleFilmer();
});

function lagreFilm(){
    clearValidationLabels();

    let error = false;
    let antallError = document.myform.myAntall.value;
    if (antallError < 1 || antallError == ""){
        document.getElementById("antall2").innerHTML = "Må fylles inn!";
        error = true;
    }

    let fornavnError = document.myform.myFornavn.value;
    if(fornavnError == 0 || fornavnError == ""){
        document.getElementById("fornavn2").innerHTML = "Må fylles inn!";
        error = true;
    }

    let etternavnError = document.myform.myEtternavn.value;
    if(etternavnError == 0 || etternavnError == ""){
        document.getElementById("etternavn2").innerHTML = "Må fylles inn!";
        error = true;
    }

    let telefonError = document.myform.myTlf.value;
    if(telefonError == 0 || telefonError == ""){
        document.getElementById("telefonnr2").innerHTML = "Må fylles inn!";
        error = true;
    }

    let epostError = document.myform.myEpost.value;
    if(epostError == 0 || epostError == ""){
        document.getElementById("epost2").innerHTML = "Må fylles inn!";
        error = true;
    }
    if(error){
        return;
    }

    function clearValidationLabels(){
        document.getElementById("antall2").innerHTML = "";
        document.getElementById("fornavn2").innerHTML = "";
        document.getElementById("etternavn2").innerHTML = "";
        document.getElementById("telefonnr2").innerHTML = "";
        document.getElementById("epost2").innerHTML = "";
    }


    const film = {
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val(),
        filmValg : $("#valgtFilm").val(),

    };
    $.post("/lagre", film, function (){
        hentAlle();
    });
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
    $("#valgtFilm").val("");
}
function hentAlleFilmer(){
    $.get("/hentFilmer", function (filmer){
        formaterFilmer(filmer);
    });
}

function formaterFilmer(filmer){
    let ut = "<select id='valgtFilm'>";
    ut+="<option>Velg Film</option>";
    for (const filmReg  of filmer){
        ut+= "<option>"+filmReg.filmValg+"</option>";
    }
    ut+="</select>";
    $("#filmValg").html(ut);
}
function hentAlle(){
    $.get("/hentAlle", function (filmer){
        formaterData(filmer);
    })
}


function formaterData(filmer){
    let ut="<table class='table table-striped'>"+
        "<tr>"+
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (const filmene of filmer){
        ut+= "<tr>"+
            "<td>"+filmene.filmValg+"</td>"+
            "<td>"+filmene.antall+"</td>"+
            "<td>"+filmene.fornavn+"</td>"+
            "<td>"+filmene.etternavn+"</td>"+
            "<td>"+filmene.telefonnr+"</td>"+
            "<td>"+filmene.epost+"</td>"+
            "</tr>";
    }
    ut+="</table>";
    $("#filmRegister").html(ut);
}

function slettData(){
    document.getElementById("form").reset();
    $.get("/slettData", function (){
        hentAlle();
    });
}
