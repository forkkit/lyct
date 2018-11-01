const LyctOptions = require('./LyctOptions');
const LyctCurve = require('./LyctCurve');

function getBezierCurveValue(curve, currentTime, start, change, totalDuration) {
  const percentComplete = currentTime / totalDuration;
  const halfPercent = (percentComplete / 2);

  switch (curve) {
    case LyctCurve.LINEAR:
      return currentTime * change / totalDuration + start;
    case LyctCurve.QUAD_EASEIN:
      return change * percentComplete * percentComplete + start;
    case LyctCurve.QUAD_EASEOUT:
      return -change * percentComplete * (percentComplete - 2) + start;
    case LyctCurve.QUAD_EASEINOUT:
      if (halfPercent < 1) {
        return change / 2 * halfPercent * halfPercent + start;
      }
      return -change / 2 * ((halfPercent - 1) * ((halfPercent - 1) - 2) - 1) + start;
    default:
      return 0;
  }
}

export default class Lyct {
  constructor(options = {}) {
    this.options = Object.assign(LyctOptions, options);
  }

  generate(options = {}) {
    const currentOption = Object.assign(this.options, options);

    const colors = [];

    for (let i = 0; i < currentOption.steps; i++) {
      // hue curve
      const hueConfig = currentOption.hue;
      let distance = hueConfig.start - hueConfig.end / hueConfig.steps;
      const hue = getBezierCurveValue(hueConfig.curve, i, distance, hueConfig.steps);

      // saturation curve
      const satConfig = currentOption.saturation;
      distance = satConfig.start - satConfig.end / currentOption.steps;
      const saturation = getBezierCurveValue(satConfig.curve, i, distance, currentOption.steps);

      // luminosity curve
      const lumConfig = currentOption.luminosity;
      distance = lumConfig.start - lumConfig.end / currentOption.steps;
      const luminosity = getBezierCurveValue(lumConfig.curve, i, distance, currentOption.steps);

      colors.push([hue, saturation, luminosity]);
    }

    return colors;
  }
}
