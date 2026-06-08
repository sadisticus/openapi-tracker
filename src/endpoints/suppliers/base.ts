import { z } from 'zod';

export const Supplier = z.object({
    id: z.number().int(),
    REF: z.string(),
    name: z.string(),
    description: z.string(),
    contactName: z.string(),
    contactEmail: z.string().email(),
    isActive: z.boolean(),
});

export const SupplierModel = {
    tableName: 'Supplier',
    primaryKeys: ['id'],
    schema: Supplier,
    serializerObject: Supplier,
};


