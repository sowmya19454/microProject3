
// const foodData = require('./data.json');
import foodData from './data.json' assert { type: 'json' };
function getAllFoodData() {
  console.log("All food items");
  return foodData;
}
console.log(getAllFoodData());


function getAllVegetableData() {
  console.log("All Vegetables");
  return foodData.filter(
    (item) => item.category === "Vegetable"
  );

}
console.log(getAllVegetableData());



function getAllFruitData() {
  console.log("All Fruits");
  return foodData.filter((item) => item.category === "Fruit");

}
console.log(getAllFruitData());



function getAllProtienData() {
  console.log("Food with category protien");
  return foodData.filter((item) => item.category === "Protein");

}
console.log(getAllProtienData());



function getAllNutsData() {
  console.log("Food with category Nuts");
  return foodData.filter((item) => item.category === "Nuts");

}
console.log(getAllNutsData());



function getAllGrainsData() {
  console.log("Food with category Grain");
  return foodData.filter((item) => item.category === "Grain");

}
console.log(getAllGrainsData());



function getAllDairyData() {
  console.log("Food with category Dairy");
  return foodData.filter((item) => item.category === "Dairy");

}
console.log(getAllDairyData());



function getAllCalorieAbove(x) {
  console.log("Food items with calorie above 100");
  return foodData.filter((item) => item.calorie > x);

}
console.log(getAllCalorieAbove(100));


function getAllCalorieBelow(x) {
  console.log("Food items with calorie below 100");
  return foodData.filter((item) => item.calorie < x);

}
console.log(getAllCalorieBelow(100));


function getAllFoodSortProtien() {

  console.log("Food items sorted with highest protien content to lowest");
  return foodData.slice().sort((x, y) => y.protiens - x.protiens);

}
console.log(getAllFoodSortProtien());



function getAllFoodSortCab() {

  console.log("Food items sorted with lowest cab content to highest");
  return foodData.slice().sort((x, y) => x.cab - y.cab);

}
console.log(getAllFoodSortCab());
