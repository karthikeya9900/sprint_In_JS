/*
0 -> copy ---> 3 params                [ op value  destinstion ]
1 -> add  ---> 4 params                [ op val1 val2 destination ]
2 -> sub  ---> 4 params                [ op val1 val2 destination ] 
3 -> jump ---> 2 params                [ op destination]
4 -> jump If Equal  ---> 4 params      [ op val1 val2 destination ]
5 -> jump If Less Than  ---> 4 params  [ op val1 val2 destination ]
6 -> put ---> 3 params                 [ op value destination ]
7 -> mul ---> 4 params                 [ op val1 val2 destination ]
8 -> div ---> 4 params                 [ op val1 val2 destination ]
9 -> stop ---> 1 params                [ stop ] 
*/

export const getOperation = (program, currentIndex) => {
  const operations = {
    0: ["copy", 3],
    1: ["add", 4],
    2: ["sub", 4],
    3: ["jump", 2],
    4: ["jumpIfEqual", 4],
    5: ["jumpIfLessThan", 4],
    6: ["put", 3],
    7: ["mul", 4],
    8: ["div", 1],
  };
  return operations[program[currentIndex]];
};
