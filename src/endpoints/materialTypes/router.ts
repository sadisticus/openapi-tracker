import { Hono } from 'hono';
import { fromHomo } from 'chanfana';
import { MaterialTypeList } from "./materialTypeList";
import { MaterialTypeRead } from "./materialTypeRead"; 
import { MaterialTypeUpdate } from "./materialTypeUpdate";
import { MaterialTypeCreate } from "./materialTypeCreate";
import { MaterialTypeDelete } from "./materialTypeDelete";

export const materialTypeRouter = fromHomo(new Hono());

materialTypeRouter.get("/", MaterialTypeList);
materialTypeRouter.get("/:id", MaterialTypeRead);
materialTypeRouter.post("/", MaterialTypeCreate);
materialTypeRouter.put("/:id", MaterialTypeUpdate);
materialTypeRouter.delete("/:id", MaterialTypeDelete);

