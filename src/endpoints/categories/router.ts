import { Hono } from 'hono';
import { fromHono } from 'chanfana';
import { CategoryList } from "./categoryList";
import {CategoryRead } from "./categoryRead";
import { CategoryUpdate } from "./categoryUpdate";
import { CategoryCreate } from "././categoryCreate";
import { CategoryDelete } from "./categoryDelete";

export const categoryRouter = fromHono(new Hono());

categoryRouter.get("/", CategoryList);
categoryRouter.get("/:id", CategoryRead);
categoryRouter.post("/", CategoryCreate);
categoryRouter.put("/:id", CategoryUpdate);
categoryRouter.delete("/:id", CategoryDelete);
