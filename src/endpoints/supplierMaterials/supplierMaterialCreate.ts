import { D1CreateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { SupplierMaterialModel } from './base';

export class SupplierMaterialCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: SupplierMaterialModel,
        fields: SupplierMaterialModel.schema.pick({
            // leave out id because user should not be able to create this
            SupplierId: true,
            MaterialId: true,
            materialName: true,
            isActive: true,
        })
    }
}
