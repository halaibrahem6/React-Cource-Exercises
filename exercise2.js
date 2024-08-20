function transformToObjects(numberArray) {
    return numberArray.map((item) => ({ val: item }));
 }
 
 const array = [1, 2, 3];
 const transformedArray = transformToObjects(array);
 console.log(transformedArray); 
 