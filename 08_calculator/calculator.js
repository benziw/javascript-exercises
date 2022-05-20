const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
  return (nums.length === 0) ? 0 : nums[0] + sum(nums.slice(1));
};

const multiply = function(nums) {
  return (nums.length === 0) ? 1 : nums[0] * multiply(nums.slice(1));
};

const power = function(x, y) {
  return (y === 0) ? 1 : x * power(x, y-1);
};

const factorial = function(x) {
  return (x === 0) ? 1 : x * factorial(x-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
