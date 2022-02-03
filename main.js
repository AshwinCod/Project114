function preload(){
    imgMustache = loadImage("https://media.istockphoto.com/vectors/black-hipster-vector-mustache-vector-id485318064?k=20&m=485318064&s=612x612&w=0&h=rv_5ApmlcAXtnIZamfJAhWhuxJz2GqEf_3DVKntvG-Y=")
}
function setup(){
    canvas = createCanvas(450,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();
}

function draw(){
    image(video, 0, 0, 450, 400);
}