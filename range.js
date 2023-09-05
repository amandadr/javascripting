
function range(start, end, step) {
  let nums = [];
  nums[0] = start;
  while (start < end && start + step <= end) {
  nums.push(start += step);
}
  end = nums.length-1;
  return nums;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));