import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import sendResponse from '../../utils/sendResponse';

const createOrder = async (req: Request, res: Response) => {
  const { quantity } = req.body;
  const result = await OrderServices.createOrderIntoDB(req.body);

  if (quantity < 1) {
    sendResponse(res, {
      success: false,
      message: 'Insufficient quantity available in inventory',
    });

    sendResponse(res, {
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const { email } = req.query as { email?: string }; // Extract email from query parameters
  const result = await OrderServices.getAllOrdersFromDB(email); // Fetch orders based on the email

  // Dynamic message based on whether an email is provided
  const message = email
    ? 'Orders fetched successfully for user email!'
    : 'Orders fetched successfully!';

  sendResponse(res, {
    success: true,
    message, // Set the dynamic message
    data: result,
  });
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
