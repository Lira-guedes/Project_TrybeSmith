import { Request, Response } from 'express';
import ordersService from '../service/orders.service';

async function getOrdersController(req: Request, res: Response): Promise<void> {
  const allOrders = await ordersService.getOrdersService();
  res.status(200).json(allOrders);
}

export default { getOrdersController };