class App
{
    runapplication()
    {   
      console.log("hello world!");
      let title = document.getElementById("newstitle")
      let newsitem1 = document.getElementsByClassName("gamenews")[0]
      let newsitem2 = document.getElementsByClassName("gamenews")[1]
      console.log(title); 
      console.log(newsitem1);
      console.log(newsitem2);

      let random = Math.random();
      console.log(random);
      if(random < 0.2)
      {
        title.style.backgroundColor = "#FF0000";
      }
      else if(0.2 < 0.6)
      {
        title.style.backgroundColor = "#00FF00";
      }
      if(random < 0.2)
      {
        newsitem1.style.backgroundColor = "#0000FF";
      }
      else if(0.2 < 0.6)
      {
        newsitem1.style.backgroundColor = "#00FF00";
      }
      if(random < 0.2)
      {
        newsitem2.style.backgroundColor = "#0000FF";
      }
      else if(0.2 < 0.6)
      {
        newsitem2.style.backgroundColor = "#F0000F";
      }
    }
}

let app = new App();
app.runapplication();
