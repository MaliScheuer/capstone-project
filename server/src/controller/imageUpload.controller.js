import { Image } from "../models/image.model";

function postImage(request, response) {
  const image = request.files.image;
  image.mv("./server/public/assets/" + image.name);

  const imageToSave = new Image({ name: image.name });

  imageToSave
    .save()
    .then((savedImage) => response.json(savedImage))
    .catch((error) => response.json(error));
}

export { postImage };
