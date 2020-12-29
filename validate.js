function balioztatu() {
  //ID-ak irakurri
  let izena = document.getElementById('izena').value;
  let posta = document.getElementById('posta').value;
  let testua = document.getElementById('testua').value;
  let parte = document.getElementById('parte');
  let gastatu = document.getElementById('gastatu');

  //Regular expresions
  let postaRGEX =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let izenaRGEX = /^[a-z ,.'-]+$/i;
  //Konprobazioak
  let parteResult = 0;
  let kopuruResult = 0;
  let erantzunResult = 0;
  let markaResult = 0;
  let diruResult = 0;
  let gastatuResult = 0;
  let bikoteResult = 0;


  let postaResult = postaRGEX.test(posta); //galdera 1
  let izenaResult = izenaRGEX.test(izena); //galdera 2
  //galdera 3
  if (document.getElementById('kopuru').checked) {
    kopuruResult = 1;
  } else if (document.getElementById('kopuru1').checked) {
    kopuruResult = 2;
  }
  else if (document.getElementById('kopuru2').checked) {
    kopuruResult = 3;
  }
  else if (document.getElementById('kopuru3').checked) {
    kopuruResult = 4;
  }
  //galdera 4
  if (document.getElementById('erantzun').checked) {
    erantzunResult = 1;
  }
  else if (document.getElementById('erantzun1').checked) {
    erantzunResult = 2;
  }
  //galdera 5
  if (parte.value) {
    parteResult = 1;
  }
  else {
    parteResult = 0;
  }
  //galdera 6
  if (document.getElementById('marka').checked) {
    markaResult = 1;
  }
  else if (document.getElementById('marka1').checked) {
    markaResult = 2;
  }
  else if (document.getElementById('marka2').checked) {
    markaResult = 3;
  }
  else if (document.getElementById('marka3').checked) {
    markaResult = 4;
  }
  //galdera 7
  if (document.getElementById('diru').checked) {
    diruResult = 1;
  }
  else if (document.getElementById('diru1').checked) {
    diruResult = 2;
  }
  else if (document.getElementById('diru2').checked) {
    diruResult = 3;
  }
  else if (document.getElementById('diru3').checked) {
    diruResult = 4;
  }
  //galdera 8
  if (gastatu.value) {
    gastatuResult = 1;
  }
  else {
    gastatuResult = 0;
  }
  //galdera 9
  if (document.getElementById('bai').checked) {
    bikoteResult = 1;
  }
  else if (document.getElementById('ez').checked) {
    bikoteResult = 2;
  }
  //galdera 10
  let testuaResult = izenaRGEX.test(testua);

  //erroreak
  if (izenaResult == false) {
    alert("sartu duzun izena ez du balio")
  }
  if (postaResult == false) {
    alert("sartu ondo dagoen posta elektroniko bat")
    return false;
  }


  alert("izena: " + izenaResult +"\n"+ " posta: " + postaResult +"\n"+ "kopuru: " + kopuruResult +"\n"+ "erantzun: "+ erantzunResult +"\n"+ "parte: "+parteResult+"\n"+"marka: "+markaResult+"\n"+ "diru: "+diruResult+"\n"+"gastatu: "+gastatuResult+"\n"+"bikote: "+bikoteResult+"\n"+"testua: "+testuaResult);
}