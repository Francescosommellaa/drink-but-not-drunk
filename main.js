
function dd(){

    x = document.getElementById("age").value;

    // verifico che x sia un numero e coloro di rosso altrimenti do il risultato e coloro di verde
    if(isNaN(x) || x < 1 || x > 100){
        document.getElementById('result').innerHTML = "Inserisci un numero da 1 a 100";
        document.getElementById('result').style.color = 'rgb(202, 0, 0)';
        
    }else if(x > 18){
        document.getElementById('result').innerHTML = "Bene puoi bere ed ubricarti :)";
        document.getElementById('result').style.color = "rgb(0, 202, 0)";
    }else{
        document.getElementById('result').innerHTML = "Non puoi ancora bere :(";
        document.getElementById('result').style.color = "rgb(0, 202, 0)";
    }
}