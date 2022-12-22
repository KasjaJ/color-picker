var colorPicker = document.getElementById('colorpicker');
var textColorPicker = document.getElementById('textcolorpicker');

// odabran opis samo, bez labela
var bodyExceptLabel = document.querySelectorAll('.opis');


var x = document.getElementById('x');
var colorBubble = document.getElementsByClassName('color');

// varijabla za trenutnu vrijednost color i text pickera
var color = colorPicker.value;
var textColor = textColorPicker.value;

/*  funkcija se aktivira kad se promijeni vrijednost pickera
apdejtuje se vrijednost varijable za pickera i izmijeni boja pozadine u skladu s tim,
i napise ti sifru boje  */
colorPicker.onchange = function() {
    color = this.value;
    console.log(color);
    document.body.style.backgroundColor = color;
    document.getElementById('bgOutput').innerText = color;
}

// ista funkcija ali za boju teksta
textColorPicker.onchange = function() {
    textColor = this.value;
    console.log(textColor);
    document.getElementById('txtOutput').innerText = textColor;
    bodyExceptLabel.innerText = textColor;
   
    // funkcija koja boji tekst sav osim onog na labelu, salta kroz nodelist
    bodyExceptLabel.forEach (function(node) {  
        node.style.color = textColor;
    } );
}



x.onclick = function(){
   x.style.color = "lightgray";
   // ovo je bitno, gore ta selekcija je html collection a ne single element!!!
   colorBubble[0].classList.toggle('transparent');
}