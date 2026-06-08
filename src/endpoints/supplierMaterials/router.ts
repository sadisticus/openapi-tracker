import { Hono } from 'hono'
import { fromHono } from 'chanfana';
import { SupplierMaterialCreate } from './supplierMaterialCreate';
import { SupplierMaterialDelete } from './supplierMaterialDelete';
import { SupplierMaterialList } from './supplierMaterialList';
import { SupplierMaterialRead } from './supplierMaterialRead';
import { SupplierMaterialUpdate } from './supplierMaterialUpdate';

export const materialSupplierRouter = fromHono(new Hono());

materialSupplierRouter.get("/", SupplierMaterialList);
materialSupplierRouter.get("/:id", SupplierMaterialRead);
materialSupplierRouter.post("/", SupplierMaterialCreate);
materialSupplierRouter.put("/:id", SupplierMaterialUpdate);
materialSupplierRouter.delete("/:id", SupplierMaterialDelete);
