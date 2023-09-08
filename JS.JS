
imie = document.getElementById("name").value;
console.log("imię: "+ imie)

nazwisko = document.getElementById("surname").value;
console.log("nazwisko: "+ nazwisko)

dataur = document.getElementById("dob").value;
console.log("data urodzenia: "+ dataur)

plec = document.getElementById("gender").value;
console.log("płeć: "+ plec)

dzieci = document.getElementById("children").value;
console.log("ilość dzieci: "+ dzieci)

but = document.getElementById("shoe_size").value;
console.log("rozmiar buta: "+ but)

level = document.getElementById("level").value;
console.log("Poziom w Pokemon Go: "+ level)

kolor = document.getElementById("color").value;
console.log("Kolor: "+ kolor)

function funkcja(){
dane1 = ['imię', "nazwisko", "data urodzenia", "płeć", "ilość dzieci", "rozmiar buta", "Poziom w Pokemon GO", "kolor"]
dane2 = [imie,nazwisko,dataur,plec,dzieci,but,level,kolor]
for (let i=0; dane1.lenght; i++) {
    console.log(dane1[i]+ dane2[i]);


}
}

