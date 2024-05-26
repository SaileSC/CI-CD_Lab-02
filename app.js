const fibonacci = (number) => {
  if (number < 0) {
    return [];
  }
  const sequence = [0];
  if (number === 0) {
    return sequence;
  }
  sequence.push(1);
  for (let i = 2; i <= number; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

console.log(fibonacci(10));
