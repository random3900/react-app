/* 1a.Import React */
import React from "react";

/* 1b.Import React DOM */
import ReactDOM from "react-dom";

/* 5d i. Import Header */
import Header from "./header";

/* 5d ii. Import Card */
import Card from "./card";

/* 7. Import weatherDeatils */
import wD from "./weatherDetails";

/* 1c.Render Your Code 
    HINT: ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT)
*/
/* ReactDOM.render(
  <h1>This is my first React App :D</h1>,
  document.getElementById("root")
); */

/* 2a.Add one more h1 tag to your render method 
    HINT: The render method accepts only one HTML tag as its first parameter
    HINT: Wrap both your h1 tags inside a single div to render them
*/
/*ReactDOM.render(
  <div>
    <h1>This is my first React App :D</h1>
    <h1>The Second h1 tag</h1>
  </div>,
  document.getElementById("root")
);*/

/* 2b.Use a variable to render your name in the second h1 tag 
   HINT: Use a JavaScript variable to hold your name
   HINT: Replace the content in the second h1 tag with your variable name enclosed in curly braces {}*/
/* var myName = "RANDOM"; */
/*ReactDOM.render(
    <div>
      <h1>This is my first React App :D</h1>
      <h1>{myName}</h1>
    </div>,
    document.getElementById("root")
  );*/

/* 2c.Replace the variable name within the curly braces with different JavaScript expressions 
   Example: 2+3 
            myName*5 
   etc
   Did you try using JS statements? Did they work? Why or Why not?
*/

/* 3a.Add custom styling for your first h1 tag
   HINT: Apply the styles present in the title class in styles.css to your h1
   Did you get a warning here? Try changing the class attribute to className instead.  */

/*ReactDOM.render(
    <div>
      <h1 className="title">This is my first React App :D</h1>
      <h1>{myName}</h1>
    </div>,
    document.getElementById("root")
  );*/

/* 3b.Add custom styling for your second h2 tag
   HINT: Use inline css to set the text color to blue
   HINT: Set style to a javascript object containing a key value pair for each style attribute
   HINT: style = {{color:blue}}  */
/*ReactDOM.render(
    <div>
      <h1 className="title">This is my first React App :D</h1>
      <h1 style={{color:"blue"}}>{myName}</h1>
    </div>,
    document.getElementById("root")
  );*/

/* 4a. Copy paste the Card div to create a row of cards with different information */
/*ReactDOM.render(
  <div>
    <div className="Header">Weather Forecast</div>
    <div className="WeatherCards">
      <div className="Card">
        <div className="Day">Sunday</div>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1779/1779906.svg"
          alt="Sun Image"
          className="WeatherPicture"
        ></img>
        <div className="WordDescription">Sunny</div>
        <div className="Temperature">27°C</div>
      </div>
      <div className="Card">
        <div className="Day">Monday</div>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1779/1779940.svg"
          alt="Sun Image"
          className="WeatherPicture"
        ></img>
        <div className="WordDescription">Rain with Clouds</div>
        <div className="Temperature">24°C</div>
      </div>
      <div className="Card">
        <div className="Day">Tuesday</div>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1779/1779754.svg"
          alt="Rain Image"
          className="WeatherPicture"
        ></img>
        <div className="WordDescription">Rainy</div>
        <div className="Temperature">22°C</div>
      </div>
      <div className="Card">
        <div className="Day">Wednesday</div>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1779/1779765.svg"
          alt="Sun Image"
          className="WeatherPicture"
        ></img>
        <div className="WordDescription">Sunny</div>
        <div className="Temperature">27°C</div>
      </div>
      <div className="Card">
        <div className="Day">Thursday</div>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1779/1779927.svg"
          alt="Sun Image"
          className="WeatherPicture"
        ></img>
        <div className="WordDescription">Sunny</div>
        <div className="Temperature">27°C</div>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
*/

/* 4a. Or actually, don't. This is where react components come in */

/* 4b. i.Create a function with the name of your 1st component - Header
       ii.Return the Header div in your Header function
       iii.Add a <Header/> tag to your main div to render the Header component */
/*
function Header(){
  return <div className="Header">Weather Forecast</div>;
}
*/

/* 4c. Repeat steps i and ii for your Card Component
       Add 5 new cards to your WeatherCards div
       NOTE: The content of each of these cards will be the same, but we'll modify that later :D */
/*
function Card(){
  return <div className="Card">
  <div className="Day">Sunday</div>
  <img
    src="https://www.flaticon.com/svg/static/icons/svg/1779/1779906.svg"
    alt="Sunny"
    className="WeatherPicture"
  ></img>
  <div className="WordDescription">Sunny</div>
  <div className="Temperature">27°C</div>
</div>
}
*/
/*
ReactDOM.render(
  <div>
    <Header/>
    <div className="WeatherCards">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>,
  document.getElementById("root")
);
*/

/* 5a. Now that you've successfully created 2 new components, try importing them into this module.
   Create 2 new files named Header.jsx and Card.jsx in the src folder
   Move your functions to their respective files. */
/* 5d. After completing steps 5b and 5c, add import statements at the beginning of your code. 
   Your app should now look the same as it previously did, without any errors */
/*ReactDOM.render(
  <div>
    <Header />
    <div className="WeatherCards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>,
  document.getElementById("root")
);
*/

/* 6a. Add a props parameter to your Card component */

/* 6b. Use attributes day, imageSrc, description and temperature to pass information to your component
         Example : 
<Card day="Sunday" imageSrc="https://www.flaticon.com/svg/static/icons/svg/1779/1779906.svg" description="Sunny" temperature="27°C"/> 
   Your app should now look the same as it previously did, without any errors */

/* 6c. Try adding a HTML Attribute (For example: className) to your Card component. Did it work? Why or why not? */

/*ReactDOM.render(
  <div>
    <Header />
    <div className="WeatherCards">
      <Card
        day="Sunday"
        imageSrc="https://www.flaticon.com/svg/static/icons/svg/1779/1779906.svg"
        description="Sunny"
        temperature="27°C"
      />
      <Card
        day="Monday"
        imageSrc="https://www.flaticon.com/svg/static/icons/svg/1779/1779940.svg"
        description="Light Rain"
        temperature="25°C"
      />
      <Card
        day="Tuesday"
        imageSrc="https://www.flaticon.com/svg/static/icons/svg/1779/1779754.svg"
        description="Clouds"
        temperature="24°C"
      />
      <Card
        day="Wednesday"
        imageSrc="https://www.flaticon.com/svg/static/icons/svg/1779/1779765.svg"
        description="Warm"
        temperature="26°C"
      />
      <Card
        day="Thursday"
        imageSrc="https://www.flaticon.com/svg/static/icons/svg/1779/1779927.svg"
        description="Heavy Rain"
        temperature="23°C"
      />

    </div>
  </div>,
  document.getElementById("root")
);*/

/* 7. You can also use import statements to import data to your app.
      For instance, the properties of each component can be imported from the WeatherDetails file. 
      Import information from the weatherDetails file and use it to populate your card components*/
 /*     ReactDOM.render(
        <div>
          <Header />
          <div className="WeatherCards">
            <Card
              day={wD[0].day}
              imageSrc={wD[0].imageSrc}
              description={wD[0].description}
              temperature={wD[0].temperature}
            />
            <Card
              day={wD[1].day}
              imageSrc={wD[1].imageSrc}
              description={wD[1].description}
              temperature={wD[1].temperature}
            />
            <Card
              day={wD[2].day}
              imageSrc={wD[2].imageSrc}
              description={wD[2].description}
              temperature={wD[2].temperature}
            />
            <Card
              day={wD[3].day}
              imageSrc={wD[3].imageSrc}
              description={wD[3].description}
              temperature={wD[3].temperature}
            />
            <Card
              day={wD[4].day}
              imageSrc={wD[4].imageSrc}
              description={wD[4].description}
              temperature={wD[4].temperature}
            />
      
          </div>
        </div>,
        document.getElementById("root")
      );
*/
  /* 8. Use the JavaScript map function to loop through your wD array and create custom cards for each Day of the week */
  
  /*WITH ARROW FUNCTION*/
  /*ReactDOM.render(
    <div>
      <Header />
      <div className="WeatherCards">
        {wD.map((item)=>{
          return <Card               
          day={item.day}
          imageSrc={item.imageSrc}
          description={item.description}
          temperature={item.temperature}/>
        })}
      </div>
    </div>,
    document.getElementById("root")
  );*/
 
  /*WITHOUT ARROW FUNCTION*/
  function makeCard(item){
    return <Card               
    day={item.day}
    imageSrc={item.imageSrc}
    description={item.description}
    temperature={item.temperature}/>
  }
  ReactDOM.render(
    <div>
      <Header />
      <div className="WeatherCards">
        {wD.map(makeCard)}
      </div>
    </div>,
    document.getElementById("root")
  );