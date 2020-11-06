[![npm](https://img.shields.io/npm/v/color-picker-react-native?style=for-the-badge)](https://www.npmjs.com/package/color-picker-react-native)

# Circular color picker

Simple color picker for react native

## Prerequisites

Your project has to have `react-native-svg` installed

```
npm i color-picker-react-native
cd ios
pod install
```

or

```
expo install react-native-svg
```

[Reference](https://github.com/react-native-svg/react-native-svg#installation)

## Installation

```
npm i color-picker-react-native
```

## Usage

```js
import { ColorPicker } from 'color-picker-react-native';

render() {
    return (
        <ColorPicker
          getColor={(color) => console.log({COLOR: color})}
          colorArray={['#F6AE2D', '#8367C7', '#E84855', '#C2F8CB', '#51D6FF']}
        />
    );
}
```

![color-picker-example](./assets/color-picker-example.png)

### Available props

| name       | type     | required | description                 |
| ---------- | -------- | -------- | --------------------------- |
| getColor   | function | yes      |
| colorArray | string[] | no       | should be at least 2 colors |
| size       | number   | no       |
