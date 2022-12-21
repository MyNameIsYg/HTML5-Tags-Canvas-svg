
function write() {
    let y = 200;
    for (let i = 0; i < 5; i++) {
        var lineOne = document.getElementById("line");
        var line_one = lineOne.getContext("2d");
        line_one.beginPath();
        var x = 100;
        line_one.moveTo(x, y);
        x = 1000;
        line_one.lineTo(x, y);
        line_one.strokeStyle = "black";
        line_one.lineWidth = 2;
        line_one.stroke();
        y += 10;
    }
}
write();

let xClear, yClear, idClear = 'aa';

function clickDo(x, y, isDo, color, id) {
    clearItem(xClear, yClear, idClear);
    document.getElementById(id).play();

    var canvas2 = document.getElementById("line");
    var context2 = canvas2.getContext("2d");
    context2.beginPath();
    context2.fillStyle = "white";
    var r = 4;
    context2.arc(x, y, r, 0, 2 * Math.PI);
    context2.fill();
    context2.lineWidth = 0.7;
    context2.strokeStyle = color;
    context2.stroke();

    var lineOne = document.getElementById("line");
    var line_one = lineOne.getContext("2d");
    line_one.beginPath();
    line_one.moveTo(x + 4, y - 15);
    line_one.lineTo(x + 4, y);
    line_one.strokeStyle = color;
    line_one.lineWidth = 0.7;
    line_one.stroke();

    if (isDo) {
        var line = document.getElementById("line");
        var line1 = line.getContext("2d");
        line1.beginPath();
        var x = 190, y = 250;
        line1.moveTo(x, y);
        x = 210, y = 250;
        line1.lineTo(x, y);
        line1.strokeStyle = "black";
        line1.lineWidth = 2;
        line1.stroke();
        isDoClear = true;
    }
    xClear = x, yClear = y, idClear = id;
}

function clearItem(x, y, id) {
    document.getElementById(id).pause();
    var canvas = document.getElementById("line");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "white";
    var width = 150, height = 250;
    context.fillRect(x - 100, y - 100, width, height);
    context.closePath();
    write();
}




