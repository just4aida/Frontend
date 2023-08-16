// Написать функцию с тернарным оператором которая проверяет на тип данных аргумент. Выводить в консоль тип данных аргумента
function checkDataType(argument) {
  const dataType = typeof argument;
  const result =
    dataType === "number"
      ? "Number"
      : dataType === "string"
      ? "String"
      : dataType === "boolean"
      ? "Boolean"
      : "Unknown Data Type";
  console.log("Аргумент имеет тип данных " + result);
}

checkDataType(42);
checkDataType("Привет");
checkDataType(true);
checkDataType([1, 2, 3]);
