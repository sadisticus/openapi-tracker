import { D1ReadEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { SupplierMaterialModel } from './base';

export class SupplierMaterialRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: SupplierMaterialModel,
    };
}