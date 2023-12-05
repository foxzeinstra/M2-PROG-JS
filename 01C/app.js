class App
{
    runapplication()
    {
        this.greeting = "starting up";
        
        console.log("hello world!");
        //code hier
        let appnaam = 'game';
        let versienummer = '1211';
        let versiedatum = 'maart';
        let autheur = 'fox_zeinstra';
        let copyright = 'ja';
        let distributeur = 'oki';
        let darkmode = true

        
        let oke = 19
        let language = true
        let sinterklaas = 'piet';

        console.log(oke);
        console.log(language);
        console.log(sinterklaas);

    }
}

class Hello
        {
            runapplication()
            {
            this.greeting = "hi"
            this.greeting2 = "i am"
            this.greeting3 = "a program"
            }   
        }

let app = new App();
app.runapplication();

console.log(app.greeting);
console.log("appNaam: " + app.appnaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);

let hello = new Hello();
hello.runapplication();

console.log(hello.greeting)
console.log(hello.greeting2)
console.log(hello.greeting3)
