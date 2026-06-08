import { D1ListEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { PurchaseOrderModel } from './base';

export class PurchaseOrderList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: PurchaseOrderModel,
        fields: PurchaseOrderModel.schema.pick({
            // omit id
            SupplierId: true,
            PONumber: true,
            PurchaseOrderDate: true,
            details: true,
        }),
    };

    searchFields = ["PONumber"];
    defaultOrderBy = "PONumber ASC";

    filterFields = ["SupplierId"];
}