import { D1CreateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PurchaseOrderModel, PurchaseOrder } from './base';
import { z } from 'zod';

type PurchaseOrderInput = z.infer<typeof PurchaseOrder>;
export class PurchaseOrderCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: PurchaseOrderModel,
        fields: PurchaseOrderModel.schema.pick({
            // omit id
            SupplierId: true,
            PONumber: true,
            PuchaseOrderDate: true,
            details: true,
        }),
    };

    async beforeCreate(data: PurchaseOrderInput, c: any) {
        return {
            ...data,
            PurchaseOrderDate: data.PuchaseOrderDate,
        };
    }
}
