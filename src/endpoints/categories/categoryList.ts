import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { CategoryModel } from "./base"; 

export class CategoryList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: CategoryModel,
    };

    searchFields = ["name", "description"];
    defaultOrderby = "name DESC";
    filterFields = ["MaterialTypeId"];

}


