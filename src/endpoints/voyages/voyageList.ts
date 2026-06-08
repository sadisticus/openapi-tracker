import { D1ListEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { VoyageModel } from './base';

export class VoyageList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: VoyageModel,
    };

    searchFields = ["Vessel", "FreeDays"];
    defaultOrderBy = "RequestedDate ASC";

    filterFields = ["PurchaseOrderId", "MaterialId", "ArrivedDate"];
}