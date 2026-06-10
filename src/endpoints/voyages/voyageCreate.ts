import { D1CreateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { Voyage, VoyageModel } from './base';
import { z } from 'zod';

type VoyageInput = z.infer<typeof Voyage>;
export class VoyageCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: VoyageModel,
        fields: VoyageModel.schema.pick({
            // omit id
            PurchaseOrderId: true,
            MaterialId: true,
            PackTypeId: true,
            vessel: true,
            FreeDays: true,
            RequestedQuantity: true,
            price: true,
            RequestedDate: true,
            VesselETA: true,
            ArrivedDate: true,
            completed: true,

        }),

    };

    async beforeCreate(data: VoyageInput, c: any) {
        return {
            ...data,
            RequestedDate: data.RequestedDate,
            VesselETA: data.VesselETA ?? null,
            ArrivedDate: data.ArrivedDate ?? null,
        };
    }
}