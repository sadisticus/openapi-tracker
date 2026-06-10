import { D1UpdateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { VoyageModel } from './base';

export class VoyageUpdate extends D1UpdateEndpoint<HandleArgs> {
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
            RequestedDate: true,
            price: true,
            VesselETA: true,
            ArrivedDate: true,
            completed: true,
        }),
    };
}