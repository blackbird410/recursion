let arr = [0, 1];

const fibs = (n) => {
  if (n > 1) {
    while (n > 2) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      n -= 1;
    }
  }
  return arr;
};

const fibsRec = (n) => {
  if (n <= 2) return [0, 1];
  else {
    let a = fibsRec(n - 1);
    return a.concat([a[a.length - 1] + a[a.length - 2]]);
  }
};

const sort = (arr) => {
  if (arr.length === 1) return arr;
  let left = sort(arr.splice(0, arr.length / 2));
  let right = sort(arr);
  return merge(left, right);
};

const merge = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.splice(0, 1)[0]);
    else sorted.push(right.splice(0, 1)[0]);
  }

  if (left.length) sorted = sorted.concat(left);
  if (right.length) sorted = sorted.concat(right);
  return sorted;
};

console.log(sort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(sort([105, 79, 100, 110]));
