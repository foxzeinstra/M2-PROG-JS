class App
{
    runapplication()
    {   
        let randomGetal = Math.random();
        console.log(randomGetal)

        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        
        g.beginPath()
        g.fillStyle = "red"
        g.lineTo(70,20)
        g.lineTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas)

        g.beginPath()
        g.fillStyle = "grey"
        g.lineTo(80,30)
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas)

        g.beginPath()
        g.fillStyle = "lightgrey"
        g.lineTo(60,40)
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas)

        g.beginPath()
        g.fillStyle = "grey"
        g.lineTo(80,30)
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.closePath();
        g.stroke();
        g.fill()
        console.log(canvas)
        
        if (randomGetal < 0.2) {
            g.fillStyle = "black";
        } else {
            g.fillStyle = "yellow";
        }
        g.beginPath()
        g.moveTo(33,20)
        g.lineTo(40,20);
        g.lineTo(37,30);
        g.lineTo(29,30);
        g.closePath();
        g.stroke()
        g.fill()
        
        console.log(canvas)
    }
}

let app = new App();
app.runapplication();
