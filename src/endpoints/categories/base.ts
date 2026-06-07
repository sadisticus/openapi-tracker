import { z } from "zod";

export const Category = z.object({
    id: z.number().int(),
    name: z.string().max(100),
    MaterialTypeId: z.number().int(),
    description: z.string().optional(),
    isActive: z.boolean().default(true),
});

export const CategoryModel = {
    tableName: "Category",
    primaryKeys: ["id"],
    schema: Category,
    serializerObject: Category,
};

