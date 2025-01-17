
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (order: TOrder) => {
   const result = await Order.create(order);

  return result;
};

const getAllOrdersFromDB = async (email?: string) => {
  let result;

  if (email) {
    // If an email is provided, perform a case-insensitive search using regex
    result = await Order.find({
      email: { $regex: email, $options: 'i' },
    });
  } else {
    // If no email is provided, retrieve all orders
    result = await Order.find();
  }

  return result;
};

const searchEmailFromDB = async (email:any) => {
  const result = await Order.find({
    email: { $regex: email, $options: 'i' },
  });

  return result;
};

const getProductByIdFromDB = async (productId: string) => {
  const result = await Order.findById(productId);

  return result;
};

const updateProductByIdFromDB = async (productId: string, updateData: any) => {
  const result = await Order.findOneAndUpdate(
    { _id: productId },
    // { $set: updateData },
    updateData,
    { new: true, upsert: true },
  );

  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Order.findByIdAndDelete(productId);

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  searchEmailFromDB,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductFromDB,
};
