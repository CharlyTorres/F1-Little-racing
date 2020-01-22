const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let interval;
let lap = 0
let lapBool = true
let lapBool2 = false

const images = {
    bg: './images/track.png',
    mercedes: './images/cars/mercedes.png',
    mercedesleft: './images/cars/mercedesleft.png',
    mercedesup: './images/cars/mercedesup.png',
    mercedesdown: './images/cars/mercedesdown.png',
    ferrari: './images/cars/ferrari.png',
    ferrarileft: './images/cars/ferrarileft.png',
    ferrariup: './images/cars/ferrariup.png',
    ferraridown: './images/cars/ferraridown.png'
  }


//ctx.fillStyle = '#5A9918 ';
//ctx.fillRect(0, 0, 1100, 550);

class SpeedWay{
    constructor() {
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.img = new Image()
      this.img.src = images.bg
      this.img.onload = () => {
        this.draw()
      }
    }
    draw() {
     // this.x--
      if (this.x < -canvas.width) this.x = 0
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      ctx.drawImage(
        this.img,
        this.x + canvas.width,
        this.y,
        this.width,
        this.height
      )
    }
  }

  const raceTrack = new SpeedWay()

class Car1 {
    constructor(){
      this.x = 350
      this.y = 480
      this.width = 60
      this.height = 25
      this.car = new Image()
      this.car.src = images.mercedes
}
  
    draw(){
      ctx.drawImage(this.car, this.x, this.y, this.width, this.height)
    }
   
   rotateRight(){
     if(this.x >= 1060) return
     this.x += 10
     this.car.src = images.mercedes
     this.width = 60
     this.height = 25
    } 
    rotateLeft(){
      if(this.x <= 20) return
      this.x -= 10
      this.car.src = images.mercedesleft
      this.width = 60
      this.height = 25
    }
    rotateDown(){
      if(this.y >= 500) return
      this.y += 10
      this.car.src = images.mercedesdown
      this.width = 25
      this.height = 60
    }
    rotateUp(){
      if(this.y <= 0) return
      this.y -= 10
      this.car.src = images.mercedesup
      this.width = 25
      this.height = 60
    }
    diagonalUpRight(){
      /* this.x += 5
      this.y -= 5 */
    }
    diagonalDownRight(){
      /* this.x += 5
      this.y += 5 */
    }
    diagonalUpLeft(){

    }
    diagonalDownLeft(){

    }
    lapScore(){
      return (
        this.x < lapup.x + lapup.width &&
        this.x + this.width > lapup.x &&
        this.y < lapup.y + lapup.height &&
        this.height + this.y > lapup.y
      )
    }
  }

  let firstCar = new Car1()

class Car2 {
    constructor(){
      this.x = 350
      this.y = 450
      this.width = 60
      this.height = 25
      this.car = new Image()
      this.car.src = images.ferrari
  //    this.car.onload = () => {
    //    this.draw()
    //}
}
  
    draw(){
      ctx.drawImage(this.car, this.x, this.y, this.width, this.height)
    }
  
    goRight(){
      if(this.x >= 1060) return
      this.car.src = images.ferrari
      this.width = 60
      this.height = 25
      this.x += 10
    }
    
    goLeft(){
      if(this.x <= 20) return
      this.car.src = images.ferrarileft
      this.width = 60
      this.height = 25
      this.x -= 10
    }
    goUp(){
      if(this.y <= 0) return
      this.y -= 10
      this.car.src = images.ferrariup
      this.width = 25
      this.height = 60
    }
    goDown(){
      if(this.y >= 500) return
      this.y += 10
      this.car.src = images.ferraridown
      this.width = 25
      this.height = 60
    }
  }

  let secondCar = new Car2()

  class Lapline{
    constructor(){
    this.x = 275
    this.y = 440
    this.width = 2
    this.height = 80
    this.img = this.draw
    }
    draw(){
      ctx.fillStyle = "black"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  lapup = new Lapline()

  function checkLaps() {

          if(firstCar.lapScore()) {
            lap +=1 
          }
            //lapBool2 = true
          /* }

          if(lapBool2 && lapBool2){
            console.log(lap)
            return lap += 1
          } */
         
        
      
  }
 
  function startGame() {
    if (interval) return
    interval = setInterval(update, 1000 / 60)
  }

function update() {
    frames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    raceTrack.draw()
    firstCar.draw()
    secondCar.draw()
    lapup.draw()
    ctx.fillText(String(lap), canvas.width - 100, 100)
    checkLaps()

  }

  document.querySelector('.start').onclick = () => {
      startGame()
  }

  document.querySelector('.fulls').onclick = () => {
    if (canvas.webkitRequestFullScreen) {
      canvas.webkitRequestFullScreen()
    } else {
      canvas.mozRequestFullScreen()
    }
  }

    window.addEventListener("keydown", keysPressed, false);
    window.addEventListener("keyup", keysReleased, false);
     
    let keys = [];
     
    function keysPressed(e) {
        keys[e.keyCode] = true
        //Car 1
        if (keys[39] && keys[38]) {
          firstCar.diagonalUpRight();
        }

        if (keys[39] && keys[40]) {
          firstCar.diagonalDownRight();
        }

        if (keys[37] && keys[40]) {
          firstCar.diagonalDownLeft();
        }

        if (keys[38] && keys[37]) {
          firstCar.diagonalUpLeft();
        }

        if (keys[39]) {
          firstCar.rotateRight()
        }

        if (keys[37]) {
          firstCar.rotateLeft()
        }

        if (keys[38]) {
          firstCar.rotateUp()
        }

        if (keys[40]) {
          firstCar.rotateDown()
        }

        //Car2
        /* if (keys[39] && keys[38]) {
          firstCar.diagonalUpRight();
        }

        if (keys[39] && keys[40]) {
          firstCar.diagonalDownRight();
        }

        if (keys[37] && keys[40]) {
          firstCar.diagonalDownLeft();
        }

        if (keys[38] && keys[37]) {
          firstCar.diagonalUpLeft();
        } */

        if (keys[68]) {
          secondCar.goRight()
        }

        if (keys[65]) {
          secondCar.goLeft()
        }

        if (keys[87]) {
          secondCar.goUp()
        }

        if (keys[83]) {
          secondCar.goDown()
        }
        e.preventDefault();    
    }
     
    function keysReleased(e) {
        keys[e.keyCode] = false;
    }       