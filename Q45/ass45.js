"use strict";
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a color or an optional feature. Print the
 Object that’s returned to make sure all the information was stored correctly.*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function CarInfo(_a) {
    var { manufacturer, modelName } = _a, extras = __rest(_a, ["manufacturer", "modelName"]);
    return Object.assign({ manufacturer, modelName }, extras);
}
const car = CarInfo({ manufacturer: "Mercedes", modelName: "Benz EQB", color: "Cosmos black", year: 2021, generation: 1 });
console.log(car);
