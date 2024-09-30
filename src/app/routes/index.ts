import { Router } from 'express';
import { ProductRoutes } from '../modules/product management/product.route';
import { OrderRoutes } from '../modules/order management/order.route';

const router = Router();

const moduleRoutes = [
  // {
  // path: '/users',
  // route: UserRouters
  // },
  {
    path: '/',
    route: ProductRoutes,
  },
  {
    path: '/',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
