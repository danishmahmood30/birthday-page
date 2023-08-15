import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { click } from '@testing-library/user-event/dist/click';

function App() {

  function fire() {
    console.log("fired")
    const PI2 = Math.PI * 2
const random = (min, max) => Math.random() * (max - min + 1) + min | 0
const timestamp = _ => new Date().getTime()

// container
class Birthday {
  constructor() {
    this.resize()

    // create a lovely place to store the firework
    this.fireworks = []
    this.counter = 0

  }
  
  resize() {
    this.width = canvas.width = window.innerWidth
    let center = this.width / 2 | 0
    this.spawnA = center - center / 4 | 0
    this.spawnB = center + center / 4 | 0
    
    this.height = canvas.height = window.innerHeight
    this.spawnC = this.height * .1
    this.spawnD = this.height * .5
    
  }
  
  onClick(evt) {
     let x = evt.clientX || evt.touches && evt.touches[0].pageX
     let y = evt.clientY || evt.touches && evt.touches[0].pageY
     
     let count = random(3,5)
     for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        x,
        y,
        random(0, 260),
        random(30, 110)))
          
     this.counter = -1
     
  }
  
  update(delta) {
    ctx.globalCompositeOperation = 'hard-light'
    ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
    ctx.fillRect(0, 0, this.width, this.height)

    ctx.globalCompositeOperation = 'lighter'
    for (let firework of this.fireworks) firework.update(delta)

    // if enough time passed... create new new firework
    this.counter += delta * 3 // each second
    if (this.counter >= 1) {
      this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        random(0, this.width),
        random(this.spawnC, this.spawnD),
        random(0, 360),
        random(30, 110)))
      this.counter = 0
    }

    // remove the dead fireworks
    if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

  }
}

class Firework {
  constructor(x, y, targetX, targetY, shade, offsprings) {
    this.dead = false
    this.offsprings = offsprings

    this.x = x
    this.y = y
    this.targetX = targetX
    this.targetY = targetY

    this.shade = shade
    this.history = []
  }
  update(delta) {
    if (this.dead) return

    let xDiff = this.targetX - this.x
    let yDiff = this.targetY - this.y
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
      this.x += xDiff * 2 * delta
      this.y += yDiff * 2 * delta

      this.history.push({
        x: this.x,
        y: this.y
      })

      if (this.history.length > 20) this.history.shift()

    } else {
      if (this.offsprings && !this.madeChilds) {
        
        let babies = this.offsprings / 2
        for (let i = 0; i < babies; i++) {
          let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
          let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

          birth.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

        }

      }
      this.madeChilds = true
      this.history.shift()
    }
    
    if (this.history.length === 0) this.dead = true
    else if (this.offsprings) { 
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i]
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
          ctx.arc(point.x, point.y, 1, 0, PI2, false)
          ctx.fill()
        } 
      } else {
      ctx.beginPath()
      ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
      ctx.arc(this.x, this.y, 1, 0, PI2, false)
      ctx.fill()
    }

  }
}

let canvas = document.getElementById('birthday')
let ctx = canvas.getContext('2d')

let then = timestamp()

let birth = new Birthday
window.onresize = () => birth.resize()
document.onclick = evt => birth.onClick(evt)
document.ontouchstart = evt => birth.onClick(evt)

  ;(function loop(){
  	requestAnimationFrame(loop)

  	let now = timestamp()
  	let delta = now - then

    then = now
    birth.update(delta / 1000)
  	

  })()
  }

  function test() {
    
    //###############################################################################
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
    // console.log(document.getElementById("days"))
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    // console.log(birthday)
    // console.log(mm)
    const countDown = new Date(2023, 7, 15, 16, 10, 0)
    // console.log(new Date().getMonth()),
     const x = setInterval(function() {    

      const now = new Date().getTime(),
            distance = countDown - now;
      
      // console.log(distance, countDown, now)
      document.getElementById("days").textContent = Math.floor(distance / (day)) 
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        // document.getElementById("headline").innerText = "Happy Birthday, Radhika 💗";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("headline").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("birthday").style.display = "block";
        clearInterval(x);
        fire();
      }
      //seconds
    }, 0)

    };

  function clickHere() {
    console.log("clicked")
    document.getElementById("content").style.display = "None";
    document.querySelector(".card").style.display = "block";
  }

    window.onload = (event) => {
      console.log("page is fully loaded");
    };

    useEffect(()=> {
      console.log("Component loaded")     
      test();      
      // fire()
    })

  return (
    <div className="container">
      <canvas id="birthday"></canvas>
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
      <img className="images2" src="cake2.png" height="200px"></img>
        <img className="images" src="birthday-2.png" height="200px"></img>
        <div class="heart heart-bg"></div>
        <div class="heart heart-main" onClick={clickHere}>
          <img src="https://see.fontimg.com/api/renderfont4/9Y5Xy/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGRUZFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UmFkaGlrYQ/loftygoals-regular.png" width="120px"></img>
        </div>
        {/* <span>🥳</span>
        <span>🎉</span>
        <span>🎂</span>
        <button onClick={clickHere}>Click me</button> */}
      </div>
      
      <div className="card">
        <div className="imgBox">
          <div className="bark"></div>
          <img src="dan.png" height="400px"></img>
        </div>
        <div className="details">
          {/* <h4 className="color1">You're not a Fossil! (YET)</h4>
          <h4 className="color2 margin">(HAPPY BIRTHDAY)</h4> */}
          <p>Dear Dad,</p>
          <p>Let's see.. .</p>
          <p>You’re never around, you</p>
          <p>hate the music I’m into, you</p>
          <p>practically despise the movies I</p>
          <p>like, and yet somehow you still</p>
          <p>manage to be the best dad every year.</p>
          <p>How do you do that? </p>
          <p className="text-right">Happy Birthday, papa!</p>
          <p className="text-right">♥Sarah</p>
        </div>
      </div>
    </div>
  );

}

export default App;
