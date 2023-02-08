let json;
let img0, img1, img2;

function preload() {
  json = loadJSON( "https://api.github.com/repos/ZRNOF/.ink/git/trees/1d0770a32b39d9a64d2b5100ea06a735c27f076f" );
}

function setup() {
  createCanvas(500, 500);

  let image_list = get_image_list( json );
  let image_dict = get_image_dict( json );
  let image_url  = get_image_url( "The_Dome_of_Light_01.jpg" );

  img0 = loadImage( image_list[0] );
  img1 = loadImage( image_dict["Dadong_Arts_Center_01.jpg"] );
  img2 = loadImage( image_url );
}

function draw() {
  clear();
  let step = frameCount % 90;
  if ( 0 <= step && step <= 30) { image(img0, 0, 0, 600, 600); }
  if (31 <= step && step <= 60) { image(img1, 0, 0, 600, 600); }
  if (61 <= step && step <  90) { image(img2, 0, 0, 600, 600); }
}