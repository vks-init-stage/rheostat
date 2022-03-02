export default {
  getPosition(xy, mi, m) {
    return ((m / (m - mi)) ** 0.5) * (((xy - mi) / m) ** 0.5) * 100;
  },

  
  getValue(x, min, max) {
    return (Math.round(((x / 100) ** 2) * (max - min)) + min);
  },
};
