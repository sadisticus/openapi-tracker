import { Hono } from 'hono'
import { fromHono } from 'chanfana';
import { SupplierMaterialCreate } from './supplierMaterialCreate';
import { SupplierMaterialDelete } from './supplierMaterialDelete';
import { SupplierMaterialList } from './supplierMaterialList';
import { SupplierMaterialRead } from './supplierMaterialRead';
import { SupplierMaterialUpdate } from './supplierMaterialUpdate';

export const supplierMaterialRouter = fromHono(new Hono());

supplierMaterialRouter.get("/", SupplierMaterialList);
supplierMaterialRouter.get("/:id", SupplierMaterialRead);
supplierMaterialRouter.post("/", SupplierMaterialCreate);
supplierMaterialRouter.put("/:id", SupplierMaterialUpdate);
supplierMaterialRouter.delete("/:id", SupplierMaterialDelete);
