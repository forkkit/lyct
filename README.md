# Lyct

Color templates based of the [color theory of Lyft][1]

_Pronounced like \*licked\*_

## Getting Started

```javascript
import Lyct from 'lyct';

// or

const Lyct = require('lyct')
```

## TODO

* [ ] Lyct
* [ ] LyctOptions
* [ ] LyctCurves
* [ ] LyctColorType
* [ ] LyctColor
* [ ] LyctColorSet

## API

### Lyct

#### Lyct([options: LyctOptions]) => Lyct

```javascript
const lyct = new Lyct();
```

#### configure(options: LyctOptions) => null

```javascript
const options = {
    steps: 7,
    hue: {
        start: 315,
        end: 293,
        curve: LyctCurves.QUAD_EASEIN
    },
    saturation: {
        start: 4,
        end: 90,
        rate: 130,
        curve: LyctCurves.QUAD_EASEOUT
    },
    luminosity: {
        start: 100,
        end: 53,
        curve: LyctCurves.QUAD_EASEOUT
    }
};
lyct.configure(options);
```

#### generate([options: LyctOptions]) = LyctColorSet

```javascript
lyct.generate() // => LyctColorSet<LyctColor>
```

#### generateFrom(color: LyctColor, [options: LyctOptions]) => LyctColorSet

```javascript
lyct.generateFrom(my_color) // => LyctColorSet<LyctColor>
```

### LyctOptions

All options and their default values. When passing options into a function, only changes from
the default need to be passed.

```javascript
{
    steps: 11,
    hue: {
        start: 315,
        end: 293,
        curve: LyctCurves.QUAD_EASEIN
    },
    saturation: {
        start: 4,
        end: 90,
        rate: 130,
        curve: LyctCurves.QUAD_EASEOUT
    },
    luminosity: {
        start: 100,
        end: 53,
        curve: LyctCurves.QUAD_EASEOUT
    }
}
```

### LyctCurves

Available curves and their values
```javascript
{
    QUAD_EASEIN: 'Quad - EaseIn',
    QUAD_EASEOUT: 'Quad - EaseOut',
    QUAD_EASEINOUT: 'Quad - EaseInOut',
}
```

### LyctColorType

Available color types and their values
```javascript
{
    HEX: 'hex',
    RGB: 'rgb',
    HSL: 'hsl',
}
```

### LyctColor

#### LyctColor(type: string, color: string) => LyctColor

```javascript
const my_color = LyctColor("hex", "#e413c3");
```

#### convert_to(type: string) => string

```javascript
my_color.convert_to(LyctColorType.HEX); // => "#e413c3"
```

### LyctColorSet

#### LyctColorSet(color1: LyctColor, color2: LyctColor, ...) => LyctColorSet

```javascript
const my_color_set = LyctColorSet(my_color);
```

#### LyctColorSet(colors: array<LyctColor>) => LyctColorSet

```javascript
const my_color_set = LyctColorSet([my_color]);
```

#### convert_all_to(type: string) => array<string>

```javascript
my_color_set.convert_all_to(LyctColorType.RGB) // => ["rgb(255, 242, 252)", "rgb(253, 187, 237)" .... ]
```


[1]: 'https://design.lyft.com/re-approaching-color-9e604ba22c88'
