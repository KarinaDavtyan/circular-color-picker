import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Svg } from 'react-native-svg';

class ColorPicker extends React.Component {

  static defaultProps = {
    size: 200,
    colorArray: ['orange', 'red', 'hotpink', 'purple', 'blue', 'lightskyblue', 'springgreen', 'yellow'],
  }

  state = {
    selectedColor: 'yellow',
  }

  chooseColor = (color) => {
    this.setState({
      selectedColor: color
    });
    this.props.getColor(color);
  }

  renderPaths = () => {
    //https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Arcs
    const { colorArray } = this.props;
    const { size } = this.props;
    const strokeWidth = size * 0.15;
    const centerX = size / 2;
    const radiusXY = size * 0.4;
    const xAxisRotation = 0;
    const largeArcFlag = 0;
    const sweepFlag = 0;
    const wheelPartAngle = 360 / colorArray.length;

    // Evaluate X
    // Use Math.round() because number is too small, Ex.: see cos90
    // `* (Math.PI / 180)` to conver degrees do radians because Math.cos() accept radians as parameter

    // Evaluate Y
    //Deduct y postion from size (Container's square side) because y axis is reversed

    // We only use centerX because the component is square, so centerX === centerY
    const evalCoordinate =
      (angle, fn = Math.cos) => Math.round(fn(angle) * radiusXY) + centerX;
    const paths = colorArray.map((path, index) => {

      const color = colorArray[index];
      const startAngle = (wheelPartAngle * index) * (Math.PI / 180);
      const finalAngle = (wheelPartAngle * (index + 1)) * (Math.PI / 180);
      const x = evalCoordinate(startAngle);
      const y = size - evalCoordinate(startAngle, Math.sin);
      const finalX = evalCoordinate(finalAngle);
      const finalY = size - evalCoordinate(finalAngle, Math.sin);

      //start point for the path
      const M = index === 0
        ? `${centerX + radiusXY} ${size / 2}`
        : `${x} ${y}`;

      //arc of the ellipse
      const d = `M${M} A ${radiusXY} ${radiusXY} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${finalX} ${finalY}`;
      return (
        <TouchableWithoutFeedback
          key={color}
          onPress={() => this.chooseColor(color)}
        >
          <Svg.Path
            d={d}
            fill='none'
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </TouchableWithoutFeedback>
      );
    });
    return paths;
  }

  render() {
    const { selectedColor } = this.state;
    const { size } = this.props;
    const centerX = size / 2;
    const centerY = size / 2;
    const radiusInnerCircle = size * 0.25;
    return (
      <Svg
        height={size}
        width={size}
      >
        <Svg.Circle
          cx={centerX}
          cy={centerY}
          r={radiusInnerCircle}
          fill={selectedColor}
        />
        {this.renderPaths()}
      </Svg>
    );
  }

}

export default ColorPicker;
