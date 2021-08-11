'use strict'

Donathin.alldonathin = [];
function Donathin(donatorName, donathinAmount) {
    donatorName = this.donatorName;
    donathinAmount = this.donathinAmount;
    Donathin.alldonathin.push(this);
    this.age = 0;
    console.log(this);

};

function randomAge() {
    this.age = (Math.random() * (20 - 60 + 1)) + 20;
    // console.log(age);
};

let form = document.getElementById('form1');
form.addEventListener('submit', NameAmount);
let tabel = document.getElementById('tabel');

function NameAmount(event) {
    event.preventDefault()
    console.log(event.target);
    let donatorName = event.target.name.value;
    let donathinAmount = event.target.donate.value;
    console.log(donatorName);

    let newDonator = new Donator(donatorName, donathinAmount);

};

Donathin.prototype.render = function () {
    let tabelRaw = document.createElement('tr')
    tabel.appendChild('tabelRaw')

    let td = document.createElement('td')
    tabelRaw.appendChild('td')
    td.textContent = this.donatorName

    let td1 = document.createElement('td')
    tabelRaw.appendChild('td1')
    td1.textContent = this.donathinAmount

    let td2 = document.createElement('td')
    tabelRaw.appendChild('td2')
    td2.textContent = this.age

};
render();
function saveItem() {
    
    
}

