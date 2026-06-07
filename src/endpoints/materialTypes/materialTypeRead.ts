import { D1ReaddEnpoints } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class MaterialTypeRead extends D1ReaddEnpoints<HandleArgs> {
    _meta = {
        model: MaterialTypeModel,
    };
}
