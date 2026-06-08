import { Hono } from 'hono';
import { fromHono } from 'chanfana';
import { SupplierList } from './supplierList';
import { SupplierRead } from './supplierRead';
import { SupplierCreate } from './supplierCreate';
import { SupplierUpdate } from './supplierUpdate';
import { SupplierDelete } from './supplierDelete';

export const supplierRouter = fromHono(new Hono());

supplierRouter.get('/', SupplierList);
supplierRouter.get('/:id', SupplierRead);
supplierRouter.post('/', SupplierCreate);
supplierRouter.put('/:id', SupplierUpdate);
supplierRouter.delete('/:id', SupplierDelete);
