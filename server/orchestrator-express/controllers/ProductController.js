const axios = require("axios")
const redis = require("../config/cache")
const baseUrl = 'http://localhost:4002/products'

class ProductController {
  static async getProducts(req, res, next) {
    try {
      let url = `${baseUrl}`
      const { search } = req.query
      const productCache = await redis.get('productCache')

      if(!productCache || search) {
        if(search) url += `?search=${search}`
        
        const { data: products } = await axios.get(url)
        console.log('dari service');
        if(!search) await redis.set('productCache', JSON.stringify(products))
        
        res.status(200).json(products)
      } else {
        console.log('dari cache');
        const products = JSON.parse(productCache)
        res.status(200).json(products)
      }
    } catch (error) {
      next(error)
    }
  }

  static async addProduct(req, res, next) {
    try {
      
      res.status(201).json("ok")
    } catch (error) {
      next(error)
    }
  }

  static async getProduct(req, res, next) {
    try {
      
      res.status(200).json("ok")
    } catch (error) {
      next(error)
    }
  }
  static async editProduct(req, res, next) {
    try {
      
      res.status(200).json("ok")
    } catch (error) {
      next(error)
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      
      res.status(200).json("ok")
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ProductController