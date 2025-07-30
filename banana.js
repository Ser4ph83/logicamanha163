let numeroAleatorio;
let tentativas;

function iniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio);
    tentativas = 0;
    document.getElementById("imagem").innerHTML = '';
    
}


function verificarPalpite() {

    let palpite = parseInt(document.getElementById("palpite").value);
    let imagem1 = document.getElementById("imagem"); 

    tentativas++;

    if(numeroAleatorio === palpite) {

        document.getElementById("textoA").innerText = "Acertou com " + tentativas + " tentativas.";
        document.getElementById("textoB").innerText = "Parabéns";
        imagem1.innerHTML = '<img src="https://png.pngtree.com/png-vector/20240531/ourmid/pngtree-red-winners-banner-png-image_12591580.png" style="width: 400px">';
            
        } else if(numeroAleatorio > palpite) {
            document.getElementById("textoB").innerText = "O numero secreto é maior que " + palpite + " !☝️";
            document.getElementById("textoA").innerText = "";
            imagem1.innerHTML = '<img src="https://bluebus-wp.s3.amazonaws.com/wp-content/uploads/2014/02/img_20140206102802_03e45bea.gif" style="width: 400px">';
        } else {
            document.getElementById("textoB").innerText = "O numero secreto é menor que " + palpite + " !👎";
            document.getElementById("textoA").innerText = "";
            imagem1.innerHTML = '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5JtodKzXRef5FJCLWfCt8rB4PHDjVqx9bg056XcpxIbzDfCUKyWNfntjbyhyNgQJgtyp_LKMIhf91ZlcfYXiVrcduQY00uohZttBpdLVYHEh1yi1b7dehxLWqUr9fTePKzQLmuamqsRQ0/s1600/pulp-fiction.gif" style="width: 400px">';
        } 
     
}

window.onload = iniciarJogo;