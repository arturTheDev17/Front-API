const Image = require("../service/DatabaseService").Image;

class AwsRepository {
  async listarImagens() {
    return await Image.findAll();
  }

  async createImage(image) {
    return await Image.create(image);
  }

  async getImage(id) {
    return await Image.findByPk(id);
  }

  async updateImage(id, image) {
    return await Image.update(image, { where: { id } });
  }

  async deleteImage(id) {
    return await Image.destroy({ where: { id } });
  }
}

module.exports = new AwsRepository();
