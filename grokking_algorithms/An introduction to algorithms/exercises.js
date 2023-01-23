/* 
TODO: 1.1 Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take? 
*/

//ans: Log2(128) = 7

const names = [
  'Adam',
  'Alex',
  'Amanda',
  'Amy',
  'Andrew',
  'Angela',
  'Anna',
  'Anne',
  'Brian',
  'Carla',
  'Carlos',
  'Carol',
  'Chloe',
  'Chris',
  'Cindy',
  'Claire',
  'Craig',
  'Daniel',
  'David',
  'Derek',
  'Donna',
  'Dorothy',
  'Edward',
  'Elizabeth',
  'Emily',
  'Emma',
  'Eric',
  'Evelyn',
  'Frank',
  'Gary',
  'George',
  'Gloria',
  'Grace',
  'Greg',
  'Hannah',
  'Jack',
  'Jacob',
  'James',
  'Jane',
  'Janet',
  'Jasmine',
  'Jean',
  'Jeff',
  'Jennifer',
  'Jessica',
  'Joe',
  'John',
  'Jonathan',
  'Jordan',
  'Joseph',
  'Joshua',
  'Julia',
  'Justin',
  'Karen',
  'Kate',
  'Kathy',
  'Kimberly',
  'Kyle',
  'Lance',
  'Laura',
  'Lauren',
  'Lena',
  'Leo',
  'Liam',
  'Lillian',
  'Lucia',
  'Luke',
  'Maggie',
  'Marcus',
  'Maria',
  'Marion',
  'Mark',
  'Melissa',
  'Michael',
  'Michelle',
  'Mike',
  'Molly',
  'Nancy',
  'Natalie',
  'Nathan',
  'Neil',
  'Nicholas',
  'Nicole',
  'Oliver',
  'Olivia',
  'Orlando',
  'Oscar',
  'Owen',
  'Paul',
  'Paula',
  'Peter',
  'Philip',
  'Ralph',
  'Randy',
  'Rebecca',
  'Ricardo',
  'Rose',
  'Russell',
  'Ruth',
  'Ryan',
  'Sabrina',
  'Salvador',
  'Samantha',
  'Sandra',
  'Steven',
  'Susan',
  'Sydney',
  'Taylor',
  'Theresa',
  'Thomas',
  'Timothy',
  'Tina',
  'Todd',
  'Tom',
  'Tony',
  'Tracy',
  'Tyler',
  'Valeria',
  'Vincent',
  'Virginia',
  'Vivian',
  'Walter',
  'Wendy',
  'William',
  'Willie',
  'Yolanda',
  'Zachary',
  'Zoe',
];

const binarySearch = (list, item, low = 0, high = list.length - 1) => {
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = list[mid];
    if (guess === item) return mid;
    else if (guess > item) return (high = mid - 1);
    else return (low = mid + 1);
  }
  return null;
};

console.log(binarySearch(names, 'Janet'));

//recursion

const recursiveBinarySearch = (list, item, low = 0, high = list.length - 1) => {
  if (low > high) return null;
  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];
  if (guess === item) return mid;
  else if (guess > item) return recursiveBinarySearch(list, item, low, mid - 1);
  else return recursiveBinarySearch(list, item, mid + 1, high);
};

console.log(recursiveBinarySearch(names, 'Janet'));
