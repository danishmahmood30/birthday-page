import logo from './logo.svg';
import './App.css';

function App() {

  function test() {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "08/14/",
        birthday = dayMonth + yyyy;
    console.log(document.getElementById("days"))
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    console.log(birthday)
    console.log(mm)
    const countDown = new Date(2023, 7, 16, 0, 0, 0)
    // console.log(new Date().getMonth()),
     setInterval(function() {    

      const now = new Date().getTime(),
            distance = countDown - now;
      
      console.log(distance, countDown, now)
      document.getElementById("days").innerText = Math.floor(distance / (day)) 
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "Happy Birthday, Radhika 💗";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        // clearInterval(x);
      }
      //seconds
    }, 0)

    };

    window.onload = (event) => {
      console.log("page is fully loaded");
      test();
    };

  return (
    <div className="container">
      <h1 id="headline">Radhika, My Love</h1>
      <div id="countdown">
        <ul>
          <li><span id="days"></span>days</li>
          <li><span id="hours"></span>Hours</li>
          <li><span id="minutes"></span>Minutes</li>
          <li><span id="seconds"></span>Seconds</li>
        </ul>
      </div>
      <div id="content" className="emoji">
        <span>🥳</span>
        <span>🎉</span>
        <span>🎂</span>
      </div>
    </div>
  );

}

export default App;
