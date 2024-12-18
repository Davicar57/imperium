function jogar(){
    let posição_um=Math.floor(Math.random()*6);
    let posição_dois=Math.floor(Math.random()*6);
    let posição_tres=Math.floor(Math.random()*6);
    
    var P_jogo=document.getElementById("P_jogo");
    var S_jogo=document.getElementById("S_jogo");
    var T_jogo=document.getElementById("T_jogo");

    console.log(posição_um)
    console.log(posição_dois)
    console.log(posição_tres)

    const lados=["lados/lado_um.png",
                 "lados/lado_dois.png",
                 "lados/lado_tres.png",
                 "lados/lado_quatro.png",
                 "lados/lado_cinco.png",
                 "lados/lado_seis.png"];

                 console.log(lados[2])
    
  
    P_jogo.src=lados[posição_um];
    S_jogo.src=lados[posição_dois];
    T_jogo.src=lados[posição_tres];
    
    
}