
function setup(){
    canvas = createCanvas(750, 600)
    canvas.position(400 ,230)
    video = createCapture(VIDEO)
video.hide()
}

function draw(){
    image(video, 190, 135, 350, 300)
   fill('green')
    rect(82, 100, 35, 400)
    fill('red')
    circle(95, 100, 80)
    fill('green')
    rect(600, 100, 35, 400)
    fill('red')
    circle(615, 100, 80)
    circle(95, 500, 80)
    circle(615, 500, 80)
}
function saveImage(){
    save('Your Image.png')
}