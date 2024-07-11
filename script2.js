function Mostrarnumerosimpares() {

        var result = document.getElementById('resultado');
 
        for (let i = 151 ; i < 300; i+=2) {
            result.innerHTML += i + " "
        }
    }