import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { TJsonData } from '../../config';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
});

const getAllProducts = async (req: Request, res: Response) => {
  const { searchTerm } = req.query as { searchTerm?: string };
  const result = await ProductServices.getAllProductsFromDB(searchTerm);

  // Dynamic message based on whether a searchTerm is provided
  const message = searchTerm
    ? `Products matching search term '${searchTerm}' fetched successfully!`
    : 'All products fetched successfully!';

  sendResponse(res, {
    success: true,
    message, // Set the dynamic message
    data: result,
  });
};

const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.getProductByIdFromDB(productId);

  sendResponse(res, {
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
};

const updateProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.updateProductByIdFromDB(
    productId,
    req.body,
  );

  sendResponse(res, {
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
};

const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteProductFromDB(productId);

  sendResponse(res, {
    success: true,
    message: 'Product deleted successfully!',
    data: result,
  });
};
const searchTerm = async (req: Request, res: Response) => {
  const { searchTerm } = req.query;
  const result = await ProductServices.searchTermFromDB(searchTerm);

  sendResponse(res, {
    success: true,
    message: "Products matching search term 'iphone' fetched successfully!",
    data: result,
  });
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProduct,
  searchTerm,
};
