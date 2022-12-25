const axios = require("axios");
const redis = require("../config/cache");
const baseUrl = "http://localhost:4002/products";

class ProductController {
  static async getProducts(req, res, next) {
    try {
      let url = `${baseUrl}`;
      const { search } = req.query;
      const productCache = await redis.get("productCache");

      if (!productCache || search) {
        if (search) url += `?search=${search}`;

        const { data: products } = await axios.get(url);
        if (!search) await redis.set("productCache", JSON.stringify(products));

        res.status(200).json(products);
      } else {
        const products = JSON.parse(productCache);
        res.status(200).json(products);
      }
    } catch (error) {
      next(error);
    }
  }

  static async addProduct(req, res, next) {
    try {
      const { name, description, price, mainImg, categoryId, UserMongoDb, images } = req.body;

      const { data } = await axios.post(baseUrl, {
        name,
        description,
        price,
        mainImg,
        categoryId,
        UserMongoDb,
        images,
      });

      await redis.del("productCache");

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async getProduct(req, res, next) {
    try {
      const { productId } = req.params;
      const { data } = await axios.get(`${baseUrl}/${productId}`);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async editProduct(req, res, next) {
    try {
      const { productId } = req.params;
      const { name, description, price, mainImg, categoryId, Images } = req.body;

      const { data } = await axios.put(`${baseUrl}/${productId}`, {
        name,
        description,
        price,
        mainImg,
        categoryId,
        Images,
      });

      await redis.del("productCache");

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { productId } = req.params;
      const { data } = await axios.delete(`${baseUrl}/${productId}`);

      await redis.del("productCache");

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
