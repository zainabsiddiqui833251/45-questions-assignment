/*Cars: Write a function that stores information about a car in a Object. The function should always receive a
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
with the required information and two other name-value pairs, such as a color or an optional feature. Print the
 Object that’s returned to make sure all the information was stored correctly.*/

 interface CarInfo {
    manufacturer: string;
    modelName: string;
    [key: string]: any; 
}

function CarInfo({ manufacturer, modelName, ...extras }: CarInfo): CarInfo {
    return { manufacturer, modelName, ...extras };
}

const car = CarInfo({ manufacturer: "Mercedes", modelName: "Benz EQB", color: "Cosmos black", year: 2021 , generation:1 });
console.log(car);
