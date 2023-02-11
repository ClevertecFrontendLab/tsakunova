export const getDateString = (value: number, isDay = false) => {
  const date = isDay ? value : value + 1;

  return date <= 9 ? `0${date}` : date;
};
