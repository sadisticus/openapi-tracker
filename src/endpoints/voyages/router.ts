import { fromHono } from "chanfana";
import { Hono } from "hono";

import { VoyageCreate } from './voyageCreate';
import { VoyageList } from './voyageList';
import { VoyageRead } from './voyageRead';
import { VoyageUpdate } from './voyageUpdate';
import { VoyageDelete } from './voyageDelete';

export const voyageRouter = fromHono(new Hono());

voyageRouter.get("/:id", VoyageRead);
voyageRouter.get("/", VoyageList);
voyageRouter.post("/", VoyageCreate);
voyageRouter.put("/:id", VoyageUpdate);
voyageRouter.delete("/:id", VoyageDelete);
