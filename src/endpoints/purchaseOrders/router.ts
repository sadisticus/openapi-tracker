import { Hono } from 'hono'
import { fromHono } from 'chanfana';

import { PurchaseOrderCreate } from './purchaseOrderCreate';
import { PurchaseOrderDelete } from './purchaseOrderDelete';
import { PurchaseOrderList } from './purchaseOrderList';
import { PurchaseOrderRead } from './purchaseOrderRead';
import { PurchaseOrderUpdate } from './purchaseOrderUpdate';

export const purchaseOrderRouter = fromHono(new Hono());

purchaseOrderRouter.get("/", PurchaseOrderList);
purchaseOrderRouter.post("/", PurchaseOrderCreate);
purchaseOrderRouter.get("/:id", PurchaseOrderRead);
purchaseOrderRouter.put("/:id", PurchaseOrderUpdate);
purchaseOrderRouter.delete("/:id", PurchaseOrderDelete);
