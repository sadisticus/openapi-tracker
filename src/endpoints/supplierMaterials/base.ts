import { z } from 'zod';

export const SupplierMaterial = z.object({
    id: z.number().int(),
    SupplierId: z.number().int(),
    MaterialId: z.number().int(),
    materialName: z.string(),
    isActive: z.boolean(),
})

export const SupplierMaterialModel = {
    tableName: "SupplierMaterial",
    primaryKeys: ["id"],
    schema: SupplierMaterial,
    serializerObject: SupplierMaterial,

}