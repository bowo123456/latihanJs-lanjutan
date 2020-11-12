const array1 =[[0,1],[2,3],[4,5]].reduceRight(
    (accumulator, curentValue) =>accumulator.concat(curentValue)
);

console.log(array1)