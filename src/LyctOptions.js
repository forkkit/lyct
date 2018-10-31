import LyctCurve from './LyctCurve';

const LyctOptions = {
  steps: 7,
  hue: {
    start: 315,
    end: 293,
    curve: LyctCurve.QUAD_EASEIN,
  },
  saturation: {
    start: 4,
    end: 90,
    rate: 130,
    curve: LyctCurve.QUAD_EASEOUT,
  },
  luminosity: {
    start: 100,
    end: 53,
    curve: LyctCurve.QUAD_EASEOUT,
  },
};

export default LyctOptions;
