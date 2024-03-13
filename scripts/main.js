let canvas = window.document.getElementById("tela_inicial");
let ctx = canvas.getContext("2d");

let src = "assets/imgs_spacecraft/spacecraft_f.png";
nave_img = new Image();
nave_img.src = src;

function desenhar() {
    ctx.drawImage(nave_img, 50, 50);
    setTimeout(desenhar, 60);
}

nave_img.onload = desenhar;