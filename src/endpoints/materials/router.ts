import { Hono } from 'hono';
import { fromHono } from 'chanfana';
import { MaterialCreate } from './materialCreate';
import { MaterialList } from './materialList';
import { MaterialRead } from './materialRead';
import { MaterialUpdate } from './materialUpdate';
import { MaterialDelete } from './materialDelete';

export const materialRouter = fromHono(new Hono());

materialRouter.post('/', MaterialCreate);
materialRouter.get('/', MaterialList);
materialRouter.get('/:id', MaterialRead);
materialRouter.put('/:id', MaterialUpdate);
materialRouter.delete('/:id', MaterialDelete);