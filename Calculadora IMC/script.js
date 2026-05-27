document.getElementById('ano').innerHTML = new Date().getFullYear();

function calcular () {
    // pega as informações html
    let txtw = document.querySelector('#txtw');
    let txth = document.querySelector('#txth');
    let res = document.querySelector('#res');
    let imgimc = document.querySelector('#imgimc');

    let w = Number(txtw.value);
    let h = Number(txth.value) / 100;

    // verifica se a resposta dada é zero ou menor
    if (w <= 0 || isNaN(w) || h <= 0 || isNaN(h)) {
        alert('[ERRO] Verifique as informações.')
        imgimc.setAttribute('src', 'imc1.png')
    }
    else if (txth.value.length != 3){
        alert(`[ERRO] Digite 3 números em 'Altura'.`)
        img1.setAttribute('src', 'imc1.png')
    }
    // se é falso, passa pra cá
    else {
        let calc = Number(w / (h * h));

        if (calc >= 40) {
            res.innerHTML = `IMC: ${calc.toFixed(2)} -  Obesidade grau III (grave).`
            imgimc.setAttribute('src', 'imcobesidades.png')
        }
        else if (calc >= 35) {
            res.innerHTML = `IMC: ${calc.toFixed(2)} -  Obesidade grau II.`
            imgimc.setAttribute('src', 'imcobesidades.png')
        }
        else if (calc >= 30) {
            res.innerHTML = `IMC: ${calc.toFixed(2)} -  Obesidade grau I.`
            imgimc.setAttribute('src', 'imcobesidades.png')
        }
        else if (calc >= 25) {
            res.innerHTML = `IMC: ${calc.toFixed(2)} -  Sobrepeso.`
            imgimc.setAttribute('src', 'imcobesidades.png')
        }        
        else if (calc >= 18.5) {
            res.innerHTML = `IMC: ${calc.toFixed(2)} - Peso adequado.`
            imgimc.setAttribute('src', 'imcsaudavel.png')
        }
        else if (calc < 18.5){
            res.innerHTML = `IMC: ${calc.toFixed(2)} -  Magreza.`
            imgimc.setAttribute('src', 'imcmagro.png')
        }
    }
}