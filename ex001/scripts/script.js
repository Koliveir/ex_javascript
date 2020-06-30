function carregar() {
    
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = './images/manha.jpg';
        document.body.style.background='#b97b41';
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = './images/tarde.jpg';
        document.body.style.background='#4484bc';
    } else {
        //Boa Noite
        img.src = './images/noite.jpg';
        document.body.style.background='#10233e';
    }

}