import { D1UpdateEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { SupplierMaterial, SupplierMaterialModel } from './base';

export class SupplierMaterialUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: SupplierMaterialModel,
        fields: SupplierMaterialModel.schema.pick({
            // omit id
            SupplierId: true,
            MaterialId: true,
            materialName: true,
            isActive: true,
        }),
    };
}