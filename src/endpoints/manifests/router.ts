import { Hono } from 'hono';
import { fromHono } from 'chanfana';

import { ManifestCreate } from './manifestCreate';
import { ManifestDelete } from './manifestDelete';
import { ManifestList } from './manifestList';
import { ManifestRead } from './manifestRead';
import { ManifestUpdate } from './manifestUpdate';

export const manifestRouter = fromHono(new Hono());

manifestRouter.get("/", ManifestList);
manifestRouter.post("/", ManifestCreate);
manifestRouter.get("/:id", ManifestRead);
manifestRouter.put("/:id", ManifestUpdate);
manifestRouter.delete("/:id", ManifestDelete);