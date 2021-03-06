"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./Grid.styles.css");
require("./vendor/pure-grids-min.css");
require("./vendor/pure-grids-responsive-min.css");
function Grid(_a) {
    var className = _a.className, _b = _a.spaced, spaced = _b === void 0 ? false : _b, _c = _a.stretch, stretch = _c === void 0 ? false : _c, children = _a.children, props = __rest(_a, ["className", "spaced", "stretch", "children"]);
    var spacedClass = '';
    switch (spaced) {
        case true:
            spacedClass = 'reactPureGridSpaced';
            break;
        case false:
            spacedClass = '';
            break;
        default:
            spacedClass = "reactPureGridSpaced " + spaced + "-reactPureGridSpaced";
            break;
    }
    return (React.createElement("div", __assign({ className: classnames_1.default('reactPureGrid', 'pure-g', className, spacedClass, { stretch: stretch }) }, props), children));
}
exports.Grid = Grid;
