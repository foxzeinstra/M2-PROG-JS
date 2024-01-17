class App
{
    runapplication()
    {   
        console.log("hello world!");
        
    }
    newClassFunction()
    {
        console.log("hello world in de nieuweClassFunction");

    }
    anotherFunctionWithArmguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
        
    }
}

let app = new App();
app.runapplication();
app.newClassFunction();
app.anotherFunctionWithArmguments("mijn argument is iets...");
