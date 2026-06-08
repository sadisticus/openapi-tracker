import { z } from 'zod';

export const PurchaseOrder = z.object({
    id: z.number().int(),
    SupplierId: z.number().int(),
    PONumber: z.number().int(),
    PurchaseOrderDate: z.string().openapi({ format: "date-time" }),
    details: z.string().optional(),
});

export const PurchaseOrderModel = {
    tableName: "PurchaseOrder",
    primaryKeys: ["id"],
    schema: PurchaseOrder,
    serialzerObject: PurchaseOrder,
};
