let json;
let img0, img1, img2;

function preload() {
  json = loadJSON( "https://api.github.com/repos/ZRNOF/Photos-for-image-processing/git/trees/a41c1247cad920a881559e69b3eb097daddb6b98" );
}

function setup() {
  createCanvas(500, 500);

  let image_list = get_image_list( json );
  let image_json = get_image_json( json );
  let image_url  = get_image_url( "The_Dome_of_Light_01.jpg" );

  img0 = loadImage( image_list[0] );
  img1 = loadImage( image_json["Dadong_Arts_Center_01.jpg"] );
  img2 = loadImage( image_url );
}

function draw() {
  clear();
  let step = frameCount % 90;
  if ( 0 <= step && step <= 30) { image(img0, 0, 0, 600, 600); }
  if (31 <= step && step <= 60) { image(img1, 0, 0, 600, 600); }
  if (61 <= step && step <  90) { image(img2, 0, 0, 600, 600); }
}

function get_image_url(filename) {
  let root = "https://raw.githubusercontent.com/ZRNOF/Photos-for-image-processing/main/Package/";
  return root + filename;
}

function get_image_list(data) {
  let id, image_list = [];
  let root = "https://raw.githubusercontent.com/ZRNOF/Photos-for-image-processing/main/Package/";
  for (id in data.tree) {
    image_list[id] = root + data.tree[id].path;
  }
  return image_list;
}

function get_image_json(data) {
  let id, image_json = {};
  let root = "https://raw.githubusercontent.com/ZRNOF/Photos-for-image-processing/main/Package/";
  for (id in data.tree) {
    image_json[data.tree[id].path] = root + data.tree[id].path;
  }
  return image_json;
}