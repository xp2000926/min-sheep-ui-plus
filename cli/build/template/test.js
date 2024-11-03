"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTestTemplate = void 0;
var utils_1 = require("./utils");
var genTestTemplate = function (name) {
    return "import { render } from '@testing-library/vue';\nimport ".concat((0, utils_1.upperFirst)(name), " from '../src/").concat(name, "';\n\ndescribe('").concat(name, " \u6D4B\u8BD5', () => {\n  test('").concat(name, "\u662F\u5426\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C', async () => {\n    const { getByRole } = render(").concat((0, utils_1.upperFirst)(name), ");\n    getByRole('").concat(name, "');\n  });\n});\n");
};
exports.genTestTemplate = genTestTemplate;
