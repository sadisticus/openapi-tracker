import { z } from 'zod';

export const Manifest = z.object({
    id: z.number().int(),
    VoyageId: z.number().int(),
    ContainerNumber: z.string(),
    quantity: z.number(),
    ReceivedDate: z.string().nullable().openapi({ format: "date-time" }),
});

export const ManifestModel = {
    tableName: "Manifest",
    primaryKeys: ["id"],
    schema: Manifest,
    serializerObject: Manifest,
};