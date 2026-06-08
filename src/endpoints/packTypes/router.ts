import { Hono } from 'hono';
import { fromHono } from 'chanfana';
import { PackTypeList } from './packTypeList';
import { PackTypeCreate } from './packTypeCreate';
import { PackTypeRead } from './packTypeRead';
import { PackTypeUpdate } from './packTypeUpdate';
import { PackTypeDelete } from './packTypeDelete';

export const packTypeRouter = fromHono(new Hono());

packTypeRouter.get("/", PackTypeList);
packTypeRouter.post("/", PackTypeCreate);
packTypeRouter.get("/:id", PackTypeRead);
packTypeRouter.put("/:id", PackTypeUpdate);
packTypeRouter.delete("/:id", PackTypeDelete);
