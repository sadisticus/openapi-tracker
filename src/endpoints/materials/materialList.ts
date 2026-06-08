import { D1ListEndpoint } from 'chanfana';
import { HandleArgs } from '../../types';
import { MaterialModel } from './base';

export class MaterialList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: MaterialModel,
    };

    searchFieldNames = ['REF', 'name'];
    defaultOrderBy = 'name ASC';

    filterFields = ["categoryId"];
}

