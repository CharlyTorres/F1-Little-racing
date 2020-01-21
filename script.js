const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    bg: './images/track.png',
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
      this.x--
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

class Player1 {
    constructor(){

    }
}

class Player2 {
    constructor(){

    }
}

class Car1 {
    constructor(){

    }
}

class Car2 {
    constructor(){

    }
}

function update() {
    // frames++
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    raceTrack.draw()
   // flappy.draw()
   // generatePipes()
   // drawPipe()
  //  checkCollitions()
  }