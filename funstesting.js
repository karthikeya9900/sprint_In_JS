import { assertEquals } from "jsr:@std/assert";

import { copy } from "./operations.js";
// Deno.test("testing of copy function with some elements", () => {
//   assertEquals(copy([1, 0, 5, 6, 5, 6, 7], 1), [1, 0, 5, 6, 5, 6, 6]);
// });
console.log(copy([1, 0, 5, 9, 5, 6, 7, 4, 2, 5], 1));

// [ 1 0 5 2 5 6 7]
//   0 1 2 3 4 5 6
