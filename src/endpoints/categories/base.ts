import { z } from "zod";

export const Category = z.object({
    id: z.number().int(),
    MaterialTypeId: z.number().int(),
    name: z.string(),
    description: z.string().optional(),
    isActive: z.boolean(),
});

export const CategoryModel = {
    tableName: "Category",
    primaryKeys: ["id"],
    schema: Category,
    serializer: (obj: Record<string, string | number | boolean>) => {
        return {
            ...obj,
            completed: Boolean(obj.isActive),
        };
    },
    serializerObject: Category,
};

