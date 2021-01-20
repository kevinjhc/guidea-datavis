import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveLine } from '@nivo/line';
const colors = require('./ChartColors.js');

let data = [
  {
    "id": "Category 1",
    "data": [
      {
        "x": "1",
        "y": 47
      },
      {
        "x": "2",
        "y": 276
      },
      {
        "x": "3",
        "y": 8
      },
      {
        "x": "4",
        "y": 156
      },
      {
        "x": "5",
        "y": 174
      },
      {
        "x": "6",
        "y": 284
      },
    ]
  },
  {
    "id": "Category 2",
    "data": [
      {
        "x": "1",
        "y": 269
      },
      {
        "x": "2",
        "y": 109
      },
      {
        "x": "3",
        "y": 146
      },
      {
        "x": "4",
        "y": 157
      },
      {
        "x": "5",
        "y": 225
      },
      {
        "x": "6",
        "y": 248
      },
    ]
  },
  {
    "id": "Category 3",
    "data": [
      {
        "x": "1",
        "y": 9
      },
      {
        "x": "2",
        "y": 185
      },
      {
        "x": "3",
        "y": 4
      },
      {
        "x": "4",
        "y": 236
      },
      {
        "x": "5",
        "y": 177
      },
      {
        "x": "6",
        "y": 73
      },
    ]
  },
  {
    "id": "Category 4",
    "data": [
      {
        "x": "1",
        "y": 37
      },
      {
        "x": "2",
        "y": 56
      },
      {
        "x": "3",
        "y": 93
      },
      {
        "x": "4",
        "y": 123
      },
      {
        "x": "5",
        "y": 34
      },
      {
        "x": "6",
        "y": 74
      },
    ]
  },
  {
    "id": "Category 5",
    "data": [
      {
        "x": "1",
        "y": 11
      },
      {
        "x": "2",
        "y": 69
      },
      {
        "x": "3",
        "y": 24
      },
      {
        "x": "4",
        "y": 211
      },
      {
        "x": "5",
        "y": 123
      },
      {
        "x": "6",
        "y": 34
      },
    ]
  },
  {
    "id": "Category 6",
    "data": [
      {
        "x": "1",
        "y": 213
      },
      {
        "x": "2",
        "y": 172
      },
      {
        "x": "3",
        "y": 42
      },
      {
        "x": "4",
        "y": 235
      },
      {
        "x": "5",
        "y": 23
      },
      {
        "x": "6",
        "y": 45
      },
    ]
  },

  {
    "id": "Category 7",
    "data": [
      {
        "x": "1",
        "y": 107
      },
      {
        "x": "2",
        "y": 76
      },
      {
        "x": "3",
        "y": 38
      },
      {
        "x": "4",
        "y": 56
      },
      {
        "x": "5",
        "y": 14
      },
      {
        "x": "6",
        "y": 84
      },
    ]
  },
  {
    "id": "Category 8",
    "data": [
      {
        "x": "1",
        "y": 33
      },
      {
        "x": "2",
        "y": 55
      },
      {
        "x": "3",
        "y": 11
      },
      {
        "x": "4",
        "y": 76
      },
      {
        "x": "5",
        "y": 42
      },
      {
        "x": "6",
        "y": 34
      },
    ]
  },
  {
    "id": "Category 9",
    "data": [
      {
        "x": "1",
        "y": 40
      },
      {
        "x": "2",
        "y": 75
      },
      {
        "x": "3",
        "y": 219
      },
      {
        "x": "4",
        "y": 44
      },
      {
        "x": "5",
        "y": 55
      },
      {
        "x": "6",
        "y": 11
      },
    ]
  },
  {
    "id": "Category 10",
    "data": [
      {
        "x": "1",
        "y": 42
      },
      {
        "x": "2",
        "y": 115
      },
      {
        "x": "3",
        "y": 33
      },
      {
        "x": "4",
        "y": 67
      },
      {
        "x": "5",
        "y": 67
      },
      {
        "x": "6",
        "y": 177
      },
    ]
  },
  {
    "id": "Category 11",
    "data": [
      {
        "x": "1",
        "y": 27
      },
      {
        "x": "2",
        "y": 224
      },
      {
        "x": "3",
        "y": 14
      },
      {
        "x": "4",
        "y": 42
      },
      {
        "x": "5",
        "y": 53
      },
      {
        "x": "6",
        "y": 35
      },
    ]
  },
  {
    "id": "Category 12",
    "data": [
      {
        "x": "1",
        "y": 147
      },
      {
        "x": "2",
        "y": 76
      },
      {
        "x": "3",
        "y": 83
      },
      {
        "x": "4",
        "y": 156
      },
      {
        "x": "5",
        "y": 14
      },
      {
        "x": "6",
        "y": 233
      },
    ]
  },
];

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: this.props.textColor,
      colorScale: this.props.colorScale,
      seriesScale: this.props.seriesScale,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      textColor: nextProps.textColor,
      colorScale: nextProps.colorScale,
      seriesScale: nextProps.seriesScale,
    });
  }

  render() {
    let displayData;
    if (this.state.seriesScale === 1) {
      displayData = data.slice(0, 1);
    } else if (this.state.seriesScale === 3) {
      displayData = data.slice(0, 3);
    } else if (this.state.seriesScale === 5) {
      displayData = data.slice(0, 5);
    } else if (this.state.seriesScale === 12) {
      displayData = data;
    }

    return (

    <>
      <ResponsiveLine
        data={displayData}
        margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        yFormat=" >-.2f"
        // colors={colors[this.state.colorScale]}
        colors={this.state.colorScale}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'X-axis',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y-axis',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        pointSize={6}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 2,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
          }
        ]}
        enableLabel={false}
        isInteractive={false}
        theme={{
          textColor: this.state.textColor,
          axis: {
            ticks: {
              line: {
                stroke: chroma(this.state.textColor).alpha(.2).hex()
              },
            },
          },
          grid: {
            line: {
              stroke: chroma(this.state.textColor).alpha(.2).hex()
            }
          }
        }}
      />
    </>
  );
  }
}

export default LineChart;
