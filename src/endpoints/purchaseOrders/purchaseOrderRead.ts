import { D1ReadEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PurchaseOrderModel } from './base';

export class PurchaseOrderRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: PurchaseOrderModel,
    };
}
