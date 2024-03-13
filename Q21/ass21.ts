/*They think of something you could store in a TypeScript Object. Write a program that creates Objects 
containing these items.*/

let firstmobile : {
    name:string;
    model:string;
    version:number;
    CPU:string;
    RAM:string;
    ROM:string;
    battery:string;
    screen:string;
    gamingPhone:boolean;
} = {
    name:"Infinix Note 11 pro",
    model:"Infinix X697",
    version:11,
    CPU:"Helio G96",
    RAM:"8 + 3GB",
    ROM:"128 GB",
    battery:"5000 mAH",
    screen:"1080 x 2460",
    gamingPhone:true,
}
console.log(firstmobile);