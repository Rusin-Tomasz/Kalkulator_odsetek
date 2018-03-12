function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    if (podatek == true) {
        var oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }

    var kapital = wplata * Math.pow((1 + oprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji);
    
    var wynik = parseFloat(kapital.toFixed(2));
    return wynik;

}

function oblicz() {
    var wplata = parseInt(document.getElementById('wplata').value);
    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    var oprocentowanie = (parseInt(document.getElementById('oprocentowanie').value) / 100);
    var podatek = document.getElementById('podatek').checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek)

    document.getElementById('wynik').innerHTML = wynik;
};

document.getElementsByTagName('button')[0].addEventListener('click', oblicz)
