import { z } from 'zod';

export const PackType = z.object({
    id: z.number().int(),
    REF: z.string(),
    name: z.string(),
    description: z.string().optional(),
    averageWeight: z.number(),

});

export const PackTypeModel = {
    tableName: "PackType",
    primaryKeys: ["id"],
    schema: PackType,
    serializerObject: PackType,
};

