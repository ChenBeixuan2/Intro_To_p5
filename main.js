function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
}

function Take_Snapshot() {
  save('Take_the_Picture.png')
}

function Filter_Tint() {
  tint_color = document.getElementById("Color").value
}