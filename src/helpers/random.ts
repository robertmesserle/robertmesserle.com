const random = (min: number, max: number): number => {
  const rand = Math.random() * Math.abs(min - max);
  return Math.round(rand + min);
};

export default random;
