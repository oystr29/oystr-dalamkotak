export function grayscale(color: string, isGrayscale: boolean = false) {
  if (!isGrayscale) return color;
  const colorsSplit = color.split("");
  let bit = "64";

  // ini #000 bentuknya
  if (colorsSplit.length === 4) {
    return;
  }

  const [, r1, r2, g1, g2, b1, b2] = colorsSplit;

  const red = parseInt(`${r1}${r2}`, 16);
  const green = parseInt(`${g1}${g2}`, 16);
  const blue = parseInt(`${b1}${b2}`, 16);

  const grayValue = parseInt(`${(red + green + blue) / 3}`);

  const grayHex = grayValue.toString(16);

  return `#${grayHex}${grayHex}${grayHex}`;
}
