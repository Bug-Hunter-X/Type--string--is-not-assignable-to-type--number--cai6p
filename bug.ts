function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];
let arr2: string[] = ['a', 'b', 'c'];

let combined: number[] = combine(arr1, arr2); // Type 'string' is not assignable to type 'number'.