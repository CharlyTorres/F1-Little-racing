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
      /* this.img.onload = () => {
        this.draw()
      } */
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

     if(this.x < limit9.x + limit9.width &&
      this.x + this.width > limit9.x &&
      this.y < limit9.y + limit9.height &&
      this.height + this.y > limit9.y) return

    if(this.x < limit11.x + limit11.width &&
      this.x + this.width > limit11.x &&
      this.y < limit11.y + limit11.height &&
      this.height + this.y > limit11.y) return

    if(this.x < limit15.x + limit15.width &&
      this.x + this.width > limit15.x &&
      this.y < limit15.y + limit15.height &&
      this.height + this.y > limit15.y) return

     this.x += 10
     this.car.src = images.mercedes
     this.width = 60
     this.height = 25
    } 
    rotateLeft(){
      if(this.x <= 20) return

      if(this.x < limit8.x + limit8.width &&
        this.x + this.width > limit8.x &&
        this.y < limit8.y + limit8.height &&
        this.height + this.y > limit8.y) return
        
      if(this.x < limit10.x + limit10.width &&
        this.x + this.width > limit10.x &&
        this.y < limit10.y + limit10.height &&
        this.height + this.y > limit10.y) return

      if(this.x < limit12.x + limit12.width &&
        this.x + this.width > limit12.x &&
        this.y < limit12.y + limit12.height &&
        this.height + this.y > limit12.y) return

      if(this.x < limit13.x + limit13.width &&
        this.x + this.width > limit13.x &&
        this.y < limit13.y + limit13.height &&
        this.height + this.y > limit13.y) return

      if(this.x < limit14.x + limit14.width &&
        this.x + this.width > limit14.x &&
        this.y < limit14.y + limit14.height &&
        this.height + this.y > limit14.y) return

      this.x -= 10
      this.car.src = images.mercedesleft
      this.width = 60
      this.height = 25
    }
    rotateDown(){
      if(this.y >= 500) return

      if(this.x < limit1.x + limit1.width &&
        this.x + this.width > limit1.x &&
        this.y < limit1.y + limit1.height &&
        this.height + this.y > limit1.y) return

      if(this.x < limit4.x + limit4.width &&
        this.x + this.width > limit4.x &&
        this.y < limit4.y + limit4.height &&
        this.height + this.y > limit4.y) return

      if(this.x < limit6.x + limit6.width &&
        this.x + this.width > limit6.x &&
        this.y < limit6.y + limit6.height &&
        this.height + this.y > limit6.y) return

      if(this.x < limit7.x + limit7.width &&
        this.x + this.width > limit7.x &&
        this.y < limit7.y + limit7.height &&
        this.height + this.y > limit7.y) return

      this.y += 10
      this.car.src = images.mercedesdown
      this.width = 25
      this.height = 60
    }
    rotateUp(){
      if(this.y <= 0) return

      if(this.x < limit2.x + limit2.width &&
        this.x + this.width > limit2.x &&
        this.y < limit2.y + limit2.height &&
        this.height + this.y > limit2.y) return

      if(this.x < limit3.x + limit3.width &&
        this.x + this.width > limit3.x &&
        this.y < limit3.y + limit3.height &&
        this.height + this.y > limit3.y) return

      if(this.x < limit5.x + limit5.width &&
        this.x + this.width > limit5.x &&
        this.y < limit5.y + limit5.height &&
        this.height + this.y > limit5.y) return

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
}
  
    draw(){
      ctx.drawImage(this.car, this.x, this.y, this.width, this.height)
    }
  
    goRight(){
      if(this.x >= 1060) return

      if(this.x < limit9.x + limit9.width &&
        this.x + this.width > limit9.x &&
        this.y < limit9.y + limit9.height &&
        this.height + this.y > limit9.y) return
  
      if(this.x < limit11.x + limit11.width &&
        this.x + this.width > limit11.x &&
        this.y < limit11.y + limit11.height &&
        this.height + this.y > limit11.y) return
  
      if(this.x < limit15.x + limit15.width &&
        this.x + this.width > limit15.x &&
        this.y < limit15.y + limit15.height &&
        this.height + this.y > limit15.y) return

      this.car.src = images.ferrari
      this.width = 60
      this.height = 25
      this.x += 10
    }
    
    goLeft(){
      if(this.x <= 20) return

      if(this.x < limit8.x + limit8.width &&
        this.x + this.width > limit8.x &&
        this.y < limit8.y + limit8.height &&
        this.height + this.y > limit8.y) return
        
      if(this.x < limit10.x + limit10.width &&
        this.x + this.width > limit10.x &&
        this.y < limit10.y + limit10.height &&
        this.height + this.y > limit10.y) return

      if(this.x < limit12.x + limit12.width &&
        this.x + this.width > limit12.x &&
        this.y < limit12.y + limit12.height &&
        this.height + this.y > limit12.y) return

      if(this.x < limit13.x + limit13.width &&
        this.x + this.width > limit13.x &&
        this.y < limit13.y + limit13.height &&
        this.height + this.y > limit13.y) return

      if(this.x < limit14.x + limit14.width &&
        this.x + this.width > limit14.x &&
        this.y < limit14.y + limit14.height &&
        this.height + this.y > limit14.y) return

      this.car.src = images.ferrarileft
      this.width = 60
      this.height = 25
      this.x -= 10
    }
    goUp(){
      if(this.y <= 0) return

      if(this.x < limit2.x + limit2.width &&
        this.x + this.width > limit2.x &&
        this.y < limit2.y + limit2.height &&
        this.height + this.y > limit2.y) return

      if(this.x < limit3.x + limit3.width &&
        this.x + this.width > limit3.x &&
        this.y < limit3.y + limit3.height &&
        this.height + this.y > limit3.y) return

      if(this.x < limit5.x + limit5.width &&
        this.x + this.width > limit5.x &&
        this.y < limit5.y + limit5.height &&
        this.height + this.y > limit5.y) return

      this.y -= 10
      this.car.src = images.ferrariup
      this.width = 25
      this.height = 60
    }
    goDown(){
      if(this.y >= 500) return

      if(this.x < limit1.x + limit1.width &&
        this.x + this.width > limit1.x &&
        this.y < limit1.y + limit1.height &&
        this.height + this.y > limit1.y) return

      if(this.x < limit4.x + limit4.width &&
        this.x + this.width > limit4.x &&
        this.y < limit4.y + limit4.height &&
        this.height + this.y > limit4.y) return

      if(this.x < limit6.x + limit6.width &&
        this.x + this.width > limit6.x &&
        this.y < limit6.y + limit6.height &&
        this.height + this.y > limit6.y) return

      if(this.x < limit7.x + limit7.width &&
        this.x + this.width > limit7.x &&
        this.y < limit7.y + limit7.height &&
        this.height + this.y > limit7.y) return

      this.y += 10
      this.car.src = images.ferraridown
      this.width = 25
      this.height = 60
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

  class Limit1{
    constructor(){
    this.x = 130
    this.y = 341
    this.width = 820
    this.height = 1
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit1 = new Limit1()

  class Limit2{
    constructor(){
    this.x = 130
    this.y = 439
    this.width = 820
    this.height = 1
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit2 = new Limit2()

  class Limit3{
    constructor(){
    this.x = 250
    this.y = 261
    this.width = 830
    this.height = 1
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit3 = new Limit3()

  class Limit4{
    constructor(){
    this.x = 240
    this.y = 162
    this.width = 600
    this.height = 1
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit4 = new Limit4()

  class Limit5{
    constructor(){
    this.x = 130
    this.y = 90
    this.width = 790
    this.height = 1
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit5 = new Limit5()

  class Limit6{
    constructor(){
    this.x = 130
    this.y = 78
    this.width = 830
    this.height = 1
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit6 = new Limit6()

  class Limit7{
    constructor(){
    this.x = 845
    this.y = 252
    this.width = 245
    this.height = 1
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit7 = new Limit7()

  class Limit8{
    constructor(){
    this.x = 841
    this.y = 159
    this.width = 1
    this.height = 100
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit8 = new Limit8()

  class Limit9{
    constructor(){
    this.x = 235
    this.y = 165
    this.width = 1
    this.height = 95
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit9 = new Limit9()

  class Limit10{
    constructor(){
    this.x = 125
    this.y = 100
    this.width = 1
    this.height = 240
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit10 = new Limit10()

  class Limit11{
    constructor(){
    this.x = 96
    this.y = 100
    this.width = 1
    this.height = 320
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit11 = new Limit11()

  class Limit12{
    constructor(){
    this.x = 300
    this.y = 400
    this.width = 1
    this.height = 320
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit12 = new Limit12()

  class Limit13{
    constructor(){
    this.x = 980
    this.y = 350
    this.width = 1
    this.height = 80
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit13 = new Limit13()

  class Limit14{
    constructor(){
    this.x = 985
    this.y = 90
    this.width = 1
    this.height = 80
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit14 = new Limit14()

  class Limit15{
    constructor(){
    this.x = 930
    this.y = 90
    this.width = 1
    this.height = 80
    }
    draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let limit15 = new Limit15()

  function checkLaps() {

          if(firstCar.lapScore()) {
            lap +=1 
            if (lap>1){
              lap = 1
            }
            if (firstCar.lapScore() && lap === 1){
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              ctx.font = '100px serif'
              ctx.fillStyle = 'green'
              ctx.fillText(String('PUTOS TODOS'), 400, 500)
              clearInterval(interval)


            }
          }

          if(secondCar.lapScore()) {
            lap +=1 
            if (lap>1){
              lap = 1
            }
            if (secondCar.lapScore() && lap === 1){
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              ctx.font = '100px serif'
              ctx.fillStyle = 'green'
              ctx.fillText(String('PUTAS TODAS'), 400, 500)
              clearInterval(interval)


            }
          }
         
        
      
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
    limit1.draw()
    limit2.draw()
    limit3.draw()
    limit4.draw()
    limit5.draw()
    limit6.draw()
    limit7.draw()
    limit8.draw()
    limit9.draw()
    limit10.draw()
    limit11.draw()
    limit12.draw()
    limit13.draw()
    limit14.draw()
    limit15.draw()
    checkLaps()

  }

  function URL() {
    location.href = 'index.html';
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
        
        if (keys[82]) {
          URL()
        }

        if (keys[13]) {
          startGame()
        }

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