import React, { Component } from 'react';
import './App.scss';
import Sidebar from './Sidebar';

import BarChart from './charts/BarChart';
import StackedBarChart from './charts/StackedBarChart';
import GroupedBarChart from './charts/GroupedBarChart';
import LineChart from './charts/LineChart';
import AreaChart from './charts/AreaChart';
import ScatterPlotChart from './charts/ScatterPlotChart';
import PieChart from './charts/PieChart';
import RadarChart from './charts/RadarChart';
import HeatmapChart from './charts/HeatmapChart';

const colors = require('./charts/ChartColors.js');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      seriesScale: 3,
      theme: "theme1",
      palettes: {
        qualitative: colors.theme1.qualitativeLight,
        sequential: colors.theme1.sequentialBlue,
        diverging: colors.theme1.diverging,
        semantic: colors.theme1.semantic
      },
    };

    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handlePalettesChange = this.handlePalettesChange.bind(this);
    this.handleSeriesScaleChange = this.handleSeriesScaleChange.bind(this);
  }

  handleBackgroundColorChange(color) {
    this.setState({backgroundColor: color});
  }

  handleTextColorChange(color) {
    this.setState({textColor: color});
  }

  handleThemeChange(theme) {
    this.setState({theme: theme});
  }

  handlePalettesChange(palettes) {
    this.setState({palettes: palettes});
  }

  handleSeriesScaleChange(colorScale) {
    this.setState({seriesScale: colorScale});
  }

  render() {

    return (
      <>
        <div className="page-wrapper with-sidebar" style={{backgroundColor: this.state.backgroundColor, color: this.state.textColor}}>

          <Sidebar
            backgroundColor={this.state.backgroundColor}
            onBackgroundColorChange={this.handleBackgroundColorChange}
            textColor={this.state.textColor}
            onTextColorChange={this.handleTextColorChange}
            theme={this.state.theme}
            onThemeChange={this.handleThemeChange}
            palettes={this.state.palettes}
            onPalettesChange={this.handlePalettesChange}
            seriesScale={this.state.seriesScale}
            onSeriesScaleChange={this.handleSeriesScaleChange} />

          <div className="content-wrapper">

            {/* Qualitative */}
            <div className="mx-auto">
              <h6 className="mt-10 mb-20 flex-grow-1">Qualitative</h6>

              <div class="charts container">

                <div className="row">
                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <BarChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <StackedBarChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <GroupedBarChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>
                </div>

                <div className="row">
                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <LineChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <AreaChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <ScatterPlotChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>
                </div>

                <div className="row">
                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <PieChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <RadarChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.qualitative}
                      seriesScale={this.state.seriesScale} />
                  </div>

                </div>

              </div>

              <hr />
            </div>
            {/* Qualitative */}

            {/* Sequential */}
            <div className="mx-auto">
              <h6 className="mt-10 mb-20 flex-grow-1">Sequential</h6>

              <div class="charts container">

                <div className="row">
                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <StackedBarChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.sequential}
                      seriesScale={this.state.seriesScale} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <GroupedBarChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.sequential}
                      seriesScale={this.state.seriesScale} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <HeatmapChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.sequential} />
                  </div>
                </div>

                <div className="row">
                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <PieChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.sequential}
                      seriesScale={this.state.seriesScale} />
                  </div>

                </div>

              </div>

              <hr />
            </div>
            {/* Sequential */}

            {/* Diverging */}
            <div className="mx-auto">
              <h6 className="mt-10 mb-20 flex-grow-1">Diverging</h6>

              <div class="charts container">

                <div className="row">
                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <HeatmapChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.diverging} />
                  </div>

                  <div className="color chart-column col-12 col-lg-6 col-xl-4">
                    <ScatterPlotChart
                      key={this.state.textColor}
                      textColor={this.state.textColor}
                      colorScale={this.state.palettes.diverging}
                      seriesScale={this.state.seriesScale} />
                  </div>
                </div>

              </div>

              <hr />
            </div>
            {/* Diverging */}

            {/* Semantic */}
            <div className="mx-auto">
              <h6 className="mt-10 mb-20 flex-grow-1">Semantic</h6>

              <div class="charts container">

              <div className="row">
                <div className="color chart-column col-12 col-lg-6 col-xl-4">
                  <BarChart
                    key={this.state.textColor}
                    textColor={this.state.textColor}
                    colorScale={this.state.palettes.semantic}
                    seriesScale={this.state.seriesScale} />
                </div>

                <div className="color chart-column col-12 col-lg-6 col-xl-4">
                  <StackedBarChart
                    key={this.state.textColor}
                    textColor={this.state.textColor}
                    colorScale={this.state.palettes.semantic}
                    seriesScale={this.state.seriesScale} />
                </div>

                <div className="color chart-column col-12 col-lg-6 col-xl-4">
                  <GroupedBarChart
                    key={this.state.textColor}
                    textColor={this.state.textColor}
                    colorScale={this.state.palettes.semantic}
                    seriesScale={this.state.seriesScale} />
                </div>
              </div>

              <div className="row">
                <div className="color chart-column col-12 col-lg-6 col-xl-4">
                  <HeatmapChart
                    key={this.state.textColor}
                    textColor={this.state.textColor}
                    colorScale={this.state.palettes.semantic} />
                </div>

                <div className="color chart-column col-12 col-lg-6 col-xl-4">
                <PieChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.palettes.semantic}
                  seriesScale={this.state.seriesScale} />
                </div>
              </div>

              </div>

            </div>
            {/* Semantic */}

          </div>
        </div>
      </>
    )
  }
}

export default App;
