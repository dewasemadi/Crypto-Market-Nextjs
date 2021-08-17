export const formatNumber = (num) => Intl.NumberFormat('id-Id').format(num);

export const formatPercent = (percent) =>
  Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(percent / 100);

export const formatColor = (percent) => {
  let color = 'black';
  if (percent > 0) color = 'green.500';
  else color = 'red.500';
  return color;
};
