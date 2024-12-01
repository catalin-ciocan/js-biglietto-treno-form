const priceKm = 0.21;
const discountMinor = 20;
const discountSenior = 40;

const btnCalcola = document.getElementById('calcola');
const btnReset = document.getElementById('reset');

btnCalcola.addEventListener('click' , handleClickCalcola)
btnReset.addEventListener('click' , handleClickReset)

function handleClickCalcola() {
  const nome = document.getElementById('nome').value;
  const km = document.getElementById('km').value;
  const fasciaEta = document.getElementById('fascia-eta').value;

  const prezzo = km * priceKm;
  let prezzoFinale = prezzo;
  let tipoBiglietto ='Biglietto Standard';

  if(fasciaEta === 'minorenne'){
    prezzoFinale *= 1 - discountMinor/100;
    tipoBiglietto = 'Sconto minorenne'
  }else if(fasciaEta === 'over65'){
    prezzoFinale *= 1 - discountSenior/100;
    tipoBiglietto = 'Sconto Senior'
  }

  const numCarozza = getRandomNumber(1,15);
  const codiceCP = getRandomNumber(1000000, 10000000);

  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = tipoBiglietto;
  document.getElementById('carrozza').innerHTML = numCarozza;
  document.getElementById('codice-cp').innerHTML = codiceCP;
  document.getElementById('costo').innerHTML = '€ ' + prezzoFinale.toFixed(2);

} 


function handleClickReset(){
  document.getElementById('nome').value = '';
  document.getElementById('km').value = '';
  document.getElementById('fascia-eta').value = '';
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) - min)
}