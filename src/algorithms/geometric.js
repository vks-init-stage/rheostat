export default {
  getPosition(x, min, m) {
    return ((m / (m - min)) ** 0.5) * (((x - min) / m) ** 0.5) * 100;
  },

  getValue(x, min, max) {
    return (Math.round(((x / 100) ** 2) * (max - min)) + min);
  },
};
