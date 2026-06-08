import { z } from 'zod';

export const Category = z.object({
    id: z.number().int(),
    MaterialTypeId: z.number().int(),
    name: z.string(),
    description: z.string(),
    isActive: z.boolean(),
});

export const CategoryModel = {
    tableName: 'MaterialCategory',
    primaryKeys: ['id'],
    schema: Category,
    serializerObject: Category,
};

