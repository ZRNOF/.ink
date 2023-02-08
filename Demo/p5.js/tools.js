// feel free to use them :)

function get_image_url(filename) {
  let root = "https://raw.githubusercontent.com/ZRNOF/.ink/main/Package/";
  return root + filename;
}

function get_image_list(data) {
  let id, image_list = [];
  let root = "https://raw.githubusercontent.com/ZRNOF/.ink/main/Package/";
  for (id in data.tree) {
    image_list[id] = root + data.tree[id].path;
  }
  return image_list;
}

function get_image_dict(data) {
  let id, image_dict = {};
  let root = "https://raw.githubusercontent.com/ZRNOF/.ink/main/Package/";
  for (id in data.tree) {
    image_dict[data.tree[id].path] = root + data.tree[id].path;
  }
  return image_dict;
}