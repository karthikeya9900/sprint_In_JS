import { assertEquals } from "jsr:@std/assert";

import { copy, add } from "./operations.js";
Deno.test("testing of copy function with some elements", () =>
  assertEquals(
    copy([1, 0, 5, 9, 5, 6, 7, 4, 2, 5], 1),
    [1, 0, 5, 9, 5, 6, 7, 4, 2, 6]
  )
);

Deno.test("testing add function for sprint with some elements", () =>
  assertEquals(
    add([1, 0, 5, 9, 1, 2, 8, 4, 2, 5], 3),
    [1, 0, 5, 9, 1, 2, 8, 4, 5, 5]
  )
);
