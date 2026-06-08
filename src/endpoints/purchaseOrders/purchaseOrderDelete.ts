import { D1DeleteEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PurchaseOrderModel } from './base';

export class PurchaseOrderDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: PurchaseOrderModel,
    };
}