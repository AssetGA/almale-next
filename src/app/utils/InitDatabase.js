// 1. У любого пользователя будет как минимум в БД  qualities и professions
// 2. Они равны mock данным
const ProductTranslation = require("../../models/ProductTranslate.js");
const Product = require("../../models/Product.js");
const ProductInfo = require("../../models/ProductInfo.js");
const ProductInfoTranslation = require("../../models/ProductInfoTranslation.js");
const productTranslateMock = require("../mock/producttranslations.json");
const productMock = require("../mock/product.json");
const productInfoMock = require("../mock/productinfo.json");
const productInfoTranslationMock = require("../mock/productinfotranslation.json");
const videosMock = require("../mock/video.json");
const Video = require("../../models/Video.js");
const VideoTranslation = require("../../models/VideoTranslation.js");
const videoInfoTranslationMock = require("../mock/videoTranslation.json");

module.exports = async () => {
  const productTranslate = await ProductTranslation.find();
  if (productTranslate.length !== productTranslateMock.length) {
    await createInitialEntity(ProductTranslation, productTranslateMock);
  }
  const products = await Product.find();
  if (products.length !== productMock.length) {
    await createInitialEntity(Product, productMock);
  }
  const videos = await Video.find();
  if (videos.length !== videosMock.length) {
    await createInitialEntity(Video, videosMock);
  }
  const productInfo = await ProductInfo.find();
  if (productInfo.length !== productInfoMock.length) {
    const list = products.map((elem) => {
      return elem._id;
    });
    await createInitialEntityNew(
      ProductInfo,
      productInfoMock,
      "productId",
      list
    );
  }
  const productInfoTranslation = await ProductInfoTranslation.find();
  if (productInfoTranslation.length !== productInfoTranslationMock.length) {
    let newList = [];
    const list = await ProductInfo.find();
    list.map((elem) => {
      newList.push(elem._id);
      newList.push(elem._id);
      newList.push(elem._id);
    });
    await createInitialEntityNew(
      ProductInfoTranslation,
      productInfoTranslationMock,
      "productInfoId",
      newList
    );
  }

  const videoInfoTranslation = await VideoTranslation.find();
  console.log("video", videoInfoTranslation.length);
  if (videoInfoTranslation.length !== videoInfoTranslationMock.length) {
    await createInitialEntity(VideoTranslation, videoInfoTranslationMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}

async function createInitialEntityNew(Model, data, str, list) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item, index) => {
      try {
        delete item._id;
        const newItem = new Model({ ...item, [str]: list[index] });
        if (item?.[str] !== list[index]) {
          await newItem.save();
          return newItem;
        }
      } catch (e) {
        return e;
      }
    })
  );
}
