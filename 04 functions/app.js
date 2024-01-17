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
