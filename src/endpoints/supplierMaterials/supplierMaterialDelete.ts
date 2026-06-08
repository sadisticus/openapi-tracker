import { D1DeleteEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { SupplierMaterialModel } from './base';
export class SupplierMaterialDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: SupplierMaterialModel,
    };
}

