export default {
  getPosition(x, mi, m) {
    return ((m / (m - mi)) ** 0.5) * (((x - mi) / m) ** 0.5) * 100;
  },

  getValue(x, min, max) {
    return (Math.round(((x / 100) ** 2) * (max - min)) + min);
  },
};
