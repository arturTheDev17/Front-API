const awsRepository = require("../Repository/AwsRepository");
const Image = require("../Model/Image");
class AwsService {
  async getImages() {
    const images = await awsRepository.listarImagens();
    const imagesReturn = images.map((image) => {
      return new Image(
        image.id,
        image.titulo,
        image.referencia,
        image.data_criacao
      );
    });
    return imagesReturn;
  }

  async createImage(image = {}) {
    const newImage = await awsRepository.createImage(
      new Image(image.id, image.titulo, image.referencia, image.data_criacao)
    );
    return new Image(
      newImage.id,
      newImage.titulo,
      newImage.referencia,
      newImage.data_criacao
    );
  }

  async getImage(id) {
    const image = await awsRepository.getImage(id);
    const imageReturn = !image
      ? null
      : new Image(image.id, image.titulo, image.referencia, image.data_criacao);
    return imageReturn;
  }

  async updateImage(id, image) {
    const retorno = await awsRepository.updateImage(id, image);
    return retorno >= 1 ? "Image updated" : "Image not found";
  }

  async deleteImage(id) {
    return await awsRepository.deleteImage(id);
  }
}
module.exports = new AwsService();
