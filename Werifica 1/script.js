function testoasorpresa() {
    document.getElementById("testo").innerHTML = "PEPPEREPE";
}

function nuovasorpresa() {
    alert("TADAAA!");
}

function canvasdisegno() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightgreen" ;
            ctx.fillRect(0, 0, 300, 250);  // coordinata1  coordinata2  larghezza  altezza

    ctx.fillStyle = "orange" ;
            ctx.fillRect(60, 60, 50, 45);

    ctx.fillStyle = "orange" ;
            ctx.fillRect(190, 60, 50, 45);

    ctx.fillStyle = "purple" ;
            ctx.fillRect(60, 160, 180, 40);
}