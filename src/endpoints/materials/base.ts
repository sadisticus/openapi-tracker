import { z } from 'zod';

export const Material = z.object({
    id: z.number().int(),
    materialCategoryId: z.number().int(),
    REF: z.string(),
    name: z.string(),
    description: z.string(),
    balance: z.number(),
    minBalance: z.number(),
    maxBalance: z.number(),
    isActive: z.boolean(),
});

export const MaterialModel = {
    tableName: 'Material',
    primaryKeys: ['id'],
    schema: Material,
    serializerObject: Material,
};

