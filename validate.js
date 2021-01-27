function balioztatu() {
    let contadorea = 3;
  //ID-ak irakurri
  let izena = document.getElementById('izena').value;
  let posta = document.getElementById('posta').value;
  let testua = document.getElementById('testua').value;
  let tel = document.getElementById('telefonoa').value;
  let helbidea = document.getElementById('helbidea').value;

  //Regular expresions
  let postaRGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let izenaRGEX = /^[a-z ,.'-]+$/i;
  let telRGEX = /[+][3-4]{2}[ ][0-9]{9}/;
  let helbideRGEX = /[A-Za-z0-9'\.\-\s\,]/;
  //Konprobazioak
  let erantzunResult = 0;
  let bermeResult = 0;
  let piezaResult = 0;
  let konponketaResult = 0;
  let markaResult = 0;
  let bikoteResult = 0;

  
  let postaResult = postaRGEX.test(posta); //galdera 1
  let izenaResult = izenaRGEX.test(izena); //galdera 2
  //galdera 3
  let telResult = telRGEX.test(telefonoa);
  //galdera 4
  let helbideResult =helbideRGEX.test(helbidea);
  //galdera 5
  if (document.getElementById('berme').checked) {
    bermeResult = 1;
  }
  else if (document.getElementById('berme1').checked) {
    bermeResult = 2;
  }
  else if (document.getElementById('berme2').checked) {
    bermeResult = 3;
  }
  //galdera 6
  if(document.getElementById('pieza').checked) {
    piezaResult = 1;
  }
  else if (document.getElementById('pieza1').checked) {
    piezaResult = 2;
  }
  //galdera 7
  if (document.getElementById('konponketa').checked) {
    konponketaResult = 1;
  }
  else if (document.getElementById('konponketa1').checked) {
    konponketaResult = 2;
  }
  else if (document.getElementById('konponketa2').checked) {
    konponketaResult = 3;
  }
  else if (document.getElementById('konponketa3').checked) {
    konponketaResult = 4;
  }
  //galdera 8
 if (document.getElementById('marka').checked) {
    markaResult = 1;
  }
  else if (document.getElementById('marka1').checked) {
    markaResult = 2;
  }
  //galdera 9
  if (document.getElementById('bikote').checked) {
    bikoteResult = 1;
  }
  else if (document.getElementById('bikote1').checked) {
    bikoteResult = 2;
  }
  //galdera 10
  let testuaResult = izenaRGEX.test(testua);

  //erroreak
  if (izenaResult == false) {
    alert("sartu duzun izena ez du balio")
    contadorea--;
    return false;
  }
  else if (postaResult == false) {
    alert("sartu ondo dagoen posta elektroniko bat")
    contadorea--;
    return false;
  }
  //else if (telResult == false) {
    //alert("sartu balio duen telefono bat")
     //contadorea--;
    //return false;
  //}
  else if (helbideResult == 0) {
    alert("sartu ondo dagoen helbide bat")
    return false;
  }
  else if (bermeResult == 0) {
    alert("aukera bat markatu behar duzu")
    return false;
   }
  else if (piezaResult == 0) {
    alert("aukera bat markatu behar duzu")
    return false;
  }
  else if (konponketaResult == 0) {
    alert("aukera bat markatu behar duzu")
    return false;
  }
  else if (markaResult == 0) {
    alert("aukera bat markatu behar duzu")
    return false;
  }
  else if (bikoteResult == 0) {
    alert("aukera bat markatu behar duzu")
    return false;
  }
  //puntuazioa
  if(bermeResult == 3) {
    contadorea++;
  }
  if (piezaResult == 4) {
    contadorea++;
  }
  if (konponketaResult == 2) {
    contadorea++;
  }
  if (markaResult == 1) {
    contadorea++;
  }
  if (bikoteResult == 2) {
    contadorea++;
  }
  if (contadorea>5) {
    alert("oso ondo");
    document.getElementById('download').click();
  }
  else {
    alert("saiatu berriro")
  }
  console.log(contadorea)
 //emaitzak ikusteko
  /*alert("izena: " + izenaResult + "\n" + " posta: " + postaResult + "\n" + "kopuru: " + kopuruResult + "\n" + "erantzun: " + erantzunResult + "\n" + "parte: " + parteResult + "\n" + "marka: " + markaResult + "\n" + "diru: " + diruResult + "\n" + "gastatu: " + gastatuResult + "\n" + "bikote: " + bikoteResult + "\n" + "testua: " + testuaResult);*/
}