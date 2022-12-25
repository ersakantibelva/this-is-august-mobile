const axios = require("axios");
const redis = require("../config/cache");
const baseUrl = "http://localhost:4002/products";
const userUrl = "http://localhost:4001/users"

class ProductController {
  static async getProducts(req, res, next) {
    try {
      let url = `${baseUrl}`;
      const { search } = req.query;
      const productCache = await redis.get("productCache");

      if (!productCache || search) {
        if (search) url += `?search=${search}`;

        const { data: products } = await axios.get(url);
        const { data: users } = await axios.get(userUrl)

        products.map(el => {
          users.forEach(ele => {
            if (ele['_id'] == el.UserMongoDb) {
              el.User = ele
            }
          })
          return el
        })


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
      const { data: product } = await axios.get(`${baseUrl}/${productId}`);

      const { data } = await axios.get(`${userUrl}/${product.UserMongoDb}`)

      product.User = data

      res.status(200).json(product);
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
