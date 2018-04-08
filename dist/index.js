"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whatstpl_1 = require("whatstpl");
const sfn_1 = require("sfn");
class WhatstplEngine extends sfn_1.TemplateEngine {
    renderFile(filename, vars = {}) {
        return whatstpl_1.Template.renderFile(filename, vars, this.options);
    }
}
exports.WhatstplEngine = WhatstplEngine;
//# sourceMappingURL=index.js.map