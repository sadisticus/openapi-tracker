import { D1UpdateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PurchaseOrderModel } from './base';

export class PurchaseOrderUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: PurchaseOrderModel,
        fields: PurchaseOrderModel.schema.pick({
            // omit id
            SupplierId: true,
            PONumber: true,
            PurchaseOrderDate: true,
            details: true,
        })
    }
}