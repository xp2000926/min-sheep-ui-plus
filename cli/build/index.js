"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander"); // 命令行工具（可以创建命令，用他的api可以注册一些命令接口，这些接口可以让用户来更nodejs 进行输入命令的时候传入参数来进行进一步的交互）
var figlet_1 = require("figlet");
var chalk_animation_1 = require("@figliolia/chalk-animation");
var inquirer = require("inquirer"); // 如果你使用的是tsnd方式需要这样导入
// 打印欢迎画面
var logo = (0, figlet_1.textSync)('min Sheep UI CLI', {
    //   font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    whitespaceBreak: true
});
var rainbow = chalk_animation_1.ChalkAnimation.rainbow(logo);
setTimeout(function () {
    rainbow.stop(); // Animation stops
}, 500);
// 创建命令对象
var cmd = new commander_1.Command();
// 注册命令、参数，以及用户传入之后的回调函数
cmd
    .command('create') // 添加命令描述
    .description('创建一个组件模板或配置文件')
    // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
    .option('-t --type <type>', "\u521B\u5EFA\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\uFF1Acomponent, lib-entry")
    // 注册命令回调
    .action(function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var type;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                type = args.type;
                if (!!type) return [3 /*break*/, 2];
                return [4 /*yield*/, inquirer.prompt([
                        {
                            // 获取输入的属性名
                            name: 'type',
                            // 交互方式为列表单选
                            type: 'list',
                            // 提示信息
                            message: '（必填）请选择创建类型：',
                            // 选项列表
                            choices: ['component', 'lib-entry'],
                            // 默认值，这里是索引下标
                            default: 0
                        }
                    ])];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
// 执行命令行参数解析
cmd.parse();
