function log(u,h,i)
{
    let log = (u*(h*h) )+ (i*h) +u;
    return log; 
}

let u = 9;
let h = 8;
let i = 15;
let logY = Math.log(i) + h + Math.pow(u,2);
console.log(logY)

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y; 
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);
let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);
let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat

}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

let x = 9;
let a =3;
let b =4
let c =89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);
function argumentsAreHandy(shoutout) 
{
    console.log("do you want to give a shoutout");
    console.log(shoutout);
}

argumentsAreHandy("super shout out");
argumentsAreHandy("rode motor");
argumentsAreHandy("superman");

function superglobal()
{
    console.log("ik ben global")
    console.log("dus je mag mij overal aanroepen")
}

superglobal()
superglobal()
superglobal()
class App
{
    runapplication()
    {   
        console.log("hello world!");
        superglobal()
    }
}

let app = new App();
app.runapplication();
