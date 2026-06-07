import { D1ListEnpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class MaterialTypeList extends D1ListEnpoint<HandleArgs> {
    _meta = {
        model: MaterialTypeModel,
    };

    searchFields = ["name", "description"];
    defaultOrderBy = "name DESC";
}

