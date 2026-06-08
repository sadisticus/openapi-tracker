import { z } from 'zod';

export const Voyage = z.object({
    id: z.number().int(),
    PurchaseOrderId: z.number().int(),
    MaterialId: z.number().int(),
    PackTypeId: z.number().int(),
    vessel: z.string(),
    FreeDays: z.number().int(),
    RequestedQuantity: z.number(),
    RequestedDate: z.string().openapi({ format: "date-time" }),
    VesselETA: z.string().nullable().openapi({ format: "date-time" }),
    ArrivedDate: z.string().nullable().openapi({ format: "date-time" }),
    completed: z.boolean(),
});

export const VoyageModel = {
    tableName: "Voyage",
    primaryKeys: ["id"],
    schema: Voyage,
    serializerObject: Voyage,
};