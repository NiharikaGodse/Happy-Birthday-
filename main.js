function preload(){

}
function setup(){
    canvas=createCanvas(1050,550);
    canvas.position(150,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    img=loadImage('HBD.jpg');
    img2=loadImage('Dots.jpg');
    img3=loadImage('Conf.jpg');
}
function draw(){
    image(video,200,30,650,500);
    tint(tint_color);

    image(img,210,40,150,130);
    image(img2,680,410,150,100);
    image(img3,210,400,150,100);
    image(img3,680,40,150,100);


    fill(255,5,7);
    stroke(0,0,0);
    ellipse(50, 50, 55, 55);

    fill(7,255,8);
    stroke(0,0,0);
    rect(30, 100, 55, 55, 20, 15, 10, 5);

    fill(6,5,255);
    stroke(0,0,0);
    ellipse(50, 210, 55, 55);

    fill(255,6,8);
    stroke(0,0,0);
    rect(30, 260, 55, 55, 20, 15, 10, 5);

    fill(6,255,9);
    stroke(0,0,0);
    ellipse(50, 370, 55, 55);

    fill(9,6,255);
    stroke(0,0,0);
    rect(30, 420, 55, 55, 20, 15, 10, 5);



    fill(255,5,7);
    stroke(0,0,0);
    ellipse(1000, 50, 55, 55);

    fill(7,255,8);
    stroke(0,0,0);
    rect(965, 100, 55, 55, 20, 15, 10, 5);

    fill(6,5,255);
    stroke(0,0,0);
    ellipse(1000, 210, 55, 55);

    fill(255,6,8);
    stroke(0,0,0);
    rect(965, 260, 55, 55, 20, 15, 10, 5);

    fill(6,255,9);
    stroke(0,0,0);
    ellipse(1000, 370, 55, 55);

    fill(9,6,255);
    stroke(0,0,0);
    rect(965, 420, 55, 55, 20, 15, 10, 5);
}
function take_snapshot(){
    save('MyFabPic.jpg');
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}