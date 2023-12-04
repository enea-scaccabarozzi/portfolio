export const clamp = (number: number, lower: number, upper: number): number => {
  if (lower > upper) {
    throw new Error('Lower bound must be less than or equal to upper bound');
  }

  if (number < lower) {
    return lower;
  } else if (number > upper) {
    return upper;
  } else {
    return number;
  }
};
