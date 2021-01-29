import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveChoropleth } from '@nivo/geo';
const colors = require('./ChartColors.js');
const countries = require('./world_countries.js');

let data = [
  {
    "id": "AFG",
    "value": 957921
  },
  {
    "id": "AGO",
    "value": 951413
  },
  {
    "id": "ALB",
    "value": 90819
  },
  {
    "id": "ARE",
    "value": 696017
  },
  {
    "id": "ARG",
    "value": 672951
  },
  {
    "id": "ARM",
    "value": 532241
  },
  {
    "id": "ATA",
    "value": 849262
  },
  {
    "id": "ATF",
    "value": 522874
  },
  {
    "id": "AUT",
    "value": 28733
  },
  {
    "id": "AZE",
    "value": 120470
  },
  {
    "id": "BDI",
    "value": 909747
  },
  {
    "id": "BEL",
    "value": 367187
  },
  {
    "id": "BEN",
    "value": 344994
  },
  {
    "id": "BFA",
    "value": 970642
  },
  {
    "id": "BGD",
    "value": 322806
  },
  {
    "id": "BGR",
    "value": 770389
  },
  {
    "id": "BHS",
    "value": 690035
  },
  {
    "id": "BIH",
    "value": 753223
  },
  {
    "id": "BLR",
    "value": 67942
  },
  {
    "id": "BLZ",
    "value": 872839
  },
  {
    "id": "BOL",
    "value": 474835
  },
  {
    "id": "BRN",
    "value": 367548
  },
  {
    "id": "BTN",
    "value": 83449
  },
  {
    "id": "BWA",
    "value": 509408
  },
  {
    "id": "CAF",
    "value": 887140
  },
  {
    "id": "CAN",
    "value": 977856
  },
  {
    "id": "CHE",
    "value": 470032
  },
  {
    "id": "CHL",
    "value": 355382
  },
  {
    "id": "CHN",
    "value": 772698
  },
  {
    "id": "CIV",
    "value": 917879
  },
  {
    "id": "CMR",
    "value": 776644
  },
  {
    "id": "COG",
    "value": 582891
  },
  {
    "id": "COL",
    "value": 195127
  },
  {
    "id": "CRI",
    "value": 354551
  },
  {
    "id": "CUB",
    "value": 213244
  },
  {
    "id": "-99",
    "value": 565645
  },
  {
    "id": "CYP",
    "value": 161247
  },
  {
    "id": "CZE",
    "value": 133147
  },
  {
    "id": "DEU",
    "value": 500935
  },
  {
    "id": "DJI",
    "value": 46415
  },
  {
    "id": "DNK",
    "value": 613894
  },
  {
    "id": "DOM",
    "value": 843459
  },
  {
    "id": "DZA",
    "value": 655983
  },
  {
    "id": "ECU",
    "value": 301822
  },
  {
    "id": "EGY",
    "value": 595808
  },
  {
    "id": "ERI",
    "value": 897594
  },
  {
    "id": "ESP",
    "value": 285699
  },
  {
    "id": "EST",
    "value": 249148
  },
  {
    "id": "ETH",
    "value": 963476
  },
  {
    "id": "FIN",
    "value": 370212
  },
  {
    "id": "FJI",
    "value": 535706
  },
  {
    "id": "FLK",
    "value": 372931
  },
  {
    "id": "FRA",
    "value": 923505
  },
  {
    "id": "GAB",
    "value": 257525
  },
  {
    "id": "GBR",
    "value": 390587
  },
  {
    "id": "GEO",
    "value": 48518
  },
  {
    "id": "GHA",
    "value": 847322
  },
  {
    "id": "GIN",
    "value": 449631
  },
  {
    "id": "GMB",
    "value": 370213
  },
  {
    "id": "GNB",
    "value": 902569
  },
  {
    "id": "GNQ",
    "value": 431289
  },
  {
    "id": "GRC",
    "value": 458111
  },
  {
    "id": "GTM",
    "value": 669520
  },
  {
    "id": "GUY",
    "value": 978526
  },
  {
    "id": "HND",
    "value": 140847
  },
  {
    "id": "HRV",
    "value": 517644
  },
  {
    "id": "HTI",
    "value": 252498
  },
  {
    "id": "HUN",
    "value": 530213
  },
  {
    "id": "IDN",
    "value": 198903
  },
  {
    "id": "IND",
    "value": 420748
  },
  {
    "id": "IRL",
    "value": 27665
  },
  {
    "id": "IRN",
    "value": 481588
  },
  {
    "id": "IRQ",
    "value": 909885
  },
  {
    "id": "ISL",
    "value": 799820
  },
  {
    "id": "ISR",
    "value": 353067
  },
  {
    "id": "ITA",
    "value": 562895
  },
  {
    "id": "JAM",
    "value": 193544
  },
  {
    "id": "JOR",
    "value": 557351
  },
  {
    "id": "JPN",
    "value": 260174
  },
  {
    "id": "KAZ",
    "value": 335020
  },
  {
    "id": "KEN",
    "value": 414504
  },
  {
    "id": "KGZ",
    "value": 285890
  },
  {
    "id": "KHM",
    "value": 396193
  },
  {
    "id": "OSA",
    "value": 525938
  },
  {
    "id": "KWT",
    "value": 103154
  },
  {
    "id": "LAO",
    "value": 173441
  },
  {
    "id": "LBN",
    "value": 390685
  },
  {
    "id": "LBR",
    "value": 894038
  },
  {
    "id": "LBY",
    "value": 797869
  },
  {
    "id": "LKA",
    "value": 364245
  },
  {
    "id": "LSO",
    "value": 131969
  },
  {
    "id": "LTU",
    "value": 67277
  },
  {
    "id": "LUX",
    "value": 368296
  },
  {
    "id": "LVA",
    "value": 374161
  },
  {
    "id": "MAR",
    "value": 93826
  },
  {
    "id": "MDA",
    "value": 280940
  },
  {
    "id": "MDG",
    "value": 630251
  },
  {
    "id": "MEX",
    "value": 636599
  },
  {
    "id": "MKD",
    "value": 77574
  },
  {
    "id": "MLI",
    "value": 946358
  },
  {
    "id": "MMR",
    "value": 300520
  },
  {
    "id": "MNE",
    "value": 489008
  },
  {
    "id": "MNG",
    "value": 438267
  },
  {
    "id": "MOZ",
    "value": 820642
  },
  {
    "id": "MRT",
    "value": 281202
  },
  {
    "id": "MWI",
    "value": 653710
  },
  {
    "id": "MYS",
    "value": 921882
  },
  {
    "id": "NAM",
    "value": 230795
  },
  {
    "id": "NCL",
    "value": 193560
  },
  {
    "id": "NER",
    "value": 378583
  },
  {
    "id": "NGA",
    "value": 756796
  },
  {
    "id": "NIC",
    "value": 534183
  },
  {
    "id": "NLD",
    "value": 554839
  },
  {
    "id": "NOR",
    "value": 781415
  },
  {
    "id": "NPL",
    "value": 504907
  },
  {
    "id": "NZL",
    "value": 452445
  },
  {
    "id": "OMN",
    "value": 641285
  },
  {
    "id": "PAK",
    "value": 24219
  },
  {
    "id": "PAN",
    "value": 250717
  },
  {
    "id": "PER",
    "value": 821870
  },
  {
    "id": "PHL",
    "value": 619056
  },
  {
    "id": "PNG",
    "value": 374137
  },
  {
    "id": "POL",
    "value": 155603
  },
  {
    "id": "PRI",
    "value": 925523
  },
  {
    "id": "PRT",
    "value": 288909
  },
  {
    "id": "PRY",
    "value": 145628
  },
  {
    "id": "QAT",
    "value": 689627
  },
  {
    "id": "ROU",
    "value": 869666
  },
  {
    "id": "RUS",
    "value": 760636
  },
  {
    "id": "RWA",
    "value": 236355
  },
  {
    "id": "ESH",
    "value": 106623
  },
  {
    "id": "SAU",
    "value": 213394
  },
  {
    "id": "SDN",
    "value": 352866
  },
  {
    "id": "SDS",
    "value": 921044
  },
  {
    "id": "SEN",
    "value": 215746
  },
  {
    "id": "SLB",
    "value": 237796
  },
  {
    "id": "SLE",
    "value": 934346
  },
  {
    "id": "SLV",
    "value": 990530
  },
  {
    "id": "ABV",
    "value": 624897
  },
  {
    "id": "SOM",
    "value": 333896
  },
  {
    "id": "SRB",
    "value": 493545
  },
  {
    "id": "SUR",
    "value": 301192
  },
  {
    "id": "SVK",
    "value": 885055
  },
  {
    "id": "SVN",
    "value": 433281
  },
  {
    "id": "SWZ",
    "value": 885630
  },
  {
    "id": "SYR",
    "value": 779427
  },
  {
    "id": "TCD",
    "value": 897692
  },
  {
    "id": "TGO",
    "value": 615755
  },
  {
    "id": "THA",
    "value": 419469
  },
  {
    "id": "TJK",
    "value": 605714
  },
  {
    "id": "TKM",
    "value": 472445
  },
  {
    "id": "TLS",
    "value": 75084
  },
  {
    "id": "TTO",
    "value": 11182
  },
  {
    "id": "TUN",
    "value": 111675
  },
  {
    "id": "TUR",
    "value": 607287
  },
  {
    "id": "TWN",
    "value": 730179
  },
  {
    "id": "TZA",
    "value": 402502
  },
  {
    "id": "UGA",
    "value": 98901
  },
  {
    "id": "UKR",
    "value": 163423
  },
  {
    "id": "URY",
    "value": 999968
  },
  {
    "id": "USA",
    "value": 629940
  },
  {
    "id": "UZB",
    "value": 470292
  },
  {
    "id": "VEN",
    "value": 217086
  },
  {
    "id": "VNM",
    "value": 524140
  },
  {
    "id": "VUT",
    "value": 571009
  },
  {
    "id": "PSE",
    "value": 563751
  },
  {
    "id": "YEM",
    "value": 409969
  },
  {
    "id": "ZAF",
    "value": 442171
  },
  {
    "id": "ZMB",
    "value": 140124
  },
  {
    "id": "ZWE",
    "value": 187956
  },
  {
    "id": "KOR",
    "value": 297528
  }
];

class ChoroplethChart extends Component {
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
    return (
    <ResponsiveChoropleth
      data={data}
      features={countries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      // colors="nivo"
      colors={this.state.colorScale}
      domain={[ 0, 1000000 ]}
      unknownColor={this.state.colorScale[0]}
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[ 0.5, 0.5 ]}
      projectionRotation={[ 0, 0, 0 ]}
      enableGraticule={false}
      // graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 2,
          itemWidth: 80,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
        }
      ]}
      theme={{
        textColor: this.state.textColor,
        tooltip: {
          container: {
            color: "black",
          },
        },
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
        );
  }
}

export default ChoroplethChart;
