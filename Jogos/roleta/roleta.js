function girar(){
   const cores=['vermelho','verde','vermelho','preto','vermelho','vermelho','vermelho','vermelho','vermelho','vermelho']

    casa_selecionada= Math.floor(Math.random()*10);

    if (cores[casa_selecionada]==="preto"){
        console.log("PRETO")
    }

    if (cores[casa_selecionada]==="vermelho"){
        console.log("VERMELHO")
    }

    if (cores[casa_selecionada]==="verde"){
        console.log("VERDE")
    }
}