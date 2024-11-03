import productService from "../../app/service/product.service";

export const fetchProductById = async (payload) => {
  try {
    const data = await productService.getOne(payload);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
