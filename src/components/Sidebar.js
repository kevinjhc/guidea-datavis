import { React, Component } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';

import './Sidebar.scss';
import 'rc-slider/assets/index.css';

const colors = require('./charts/ChartColors.js');

const themeOptions = [
  {
    value: 'theme1',
    label: 'Example Light Theme',
    palettes: {
      qualitative: colors.theme1.qualitativeLight,
      sequential: colors.theme1.sequentialBlue,
      diverging: colors.theme1.diverging,
      semantic: colors.theme1.semantic
    },
    pageSettings: {
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
    }
  },
  {
    value: 'theme2',
    label: 'Example Dark Theme',
    palettes: {
      qualitative: colors.theme2.qualitativeDark,
      sequential: colors.theme2.sequentialPurple,
      diverging: colors.theme2.diverging,
      semantic: colors.theme2.semantic
    },
    pageSettings: {
      backgroundColor: "#000000",
      textColor: "#FFFFFF",
    }
  },
];

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      textColor: this.props.textColor,
      theme: this.props.theme,
      palettes: this.props.palettes,
      seriesScale: 3,
    };
  }

  handleThemeChange = e => {
    this.setState({
      theme: e.value,
      backgroundColor: e.pageSettings.backgroundColor,
      textColor: e.pageSettings.textColor,
      palettes: e.palettes
    });
    this.props.onThemeChange(e.value);
    this.props.onBackgroundColorChange(e.pageSettings.backgroundColor);
    this.props.onTextColorChange(e.pageSettings.textColor);
    this.props.onPalettesChange(e.palettes);
  };

  handleSeriesScaleChange = val => {
    this.setState({
      seriesScale: val,
    });
    this.props.onSeriesScaleChange(val);
  };

  render() {

    return (
      <div className="sidebar shadow-lg">
        <div className="sidebar-menu">

          <div className="sidebar-brand">
            <div>
              Data Vis Palette Tool
              <p className="font-size-12 mt-0 text-muted">By: Kevin Chang</p>
            </div>
          </div>

          <div className="sidebar-divider mb-10"></div>

          <h5 className="sidebar-title">Theme</h5>

          <div className="sidebar-link select mb-5">
            <Select
              defaultValue={themeOptions[0]}
              options={themeOptions}
              onChange={this.handleThemeChange}
            />
          </div>

          <div className="sidebar-divider my-10"></div>

          <h5 className="sidebar-title">Chart Complexity</h5>

          <div className="sidebar-link select" style={{padding: "6px 20px 24px"}}>
            <Slider
              min={1}
              max={5}
              defaultValue={3}
              marks={{ 1: "Low", 3: "Medium", 5: "High" }}
              step={null}
              onChange={this.handleSeriesScaleChange} />
          </div>

        </div>
      </div>
    );
  }
}

export default Sidebar;
