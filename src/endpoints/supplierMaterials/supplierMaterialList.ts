import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from '../../types';
import { SupplierMaterialModel } from './base';

export class SupplierMaterialList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: SupplierMaterialModel,
        fields: SupplierMaterialModel.schema.pick({
            // omits id because user shount not have access
            SupplierId: true,
            MaterialId: true,
            materialName: true,
            isActive: true,
        }),
    };
}
