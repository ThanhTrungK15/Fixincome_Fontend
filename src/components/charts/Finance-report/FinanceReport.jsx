import React from 'react';
import ReactApexChart from 'react-apexcharts';


export default class extends React.Component {
  get chart() {
    return this.chartRef.current.chart;
  }

  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.state = {
      series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}`;
          },
          offsetY: -12,
          style: {
            fontSize: '12px',
            colors: ['#304758']
          }
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'XYZ - Stock Analysis (2009 - 2016)',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          labels: {
            formatter(value) {
              return `${value}`;
            }
          }
        },
        yaxis: [
          {
            show: false,
            reversed: false,
            seriesName: 'Operating',
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB'
              },
              formatter(value) { return `${value}`; }
            },
            title: {
              text: 'Income (thousand crores)',
              style: {
                color: '#008FFB'
              }
            },
            tooltip: {
              enabled: false
            }
          },
          {
            show: false,
            reversed: false,
            seriesName: 'Investing',
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396'
              },
              formatter(value) { return `${value}`; }
            },
            title: {
              text: 'Operating Cashflow (thousand crores)',
              style: {
                color: '#00E396'
              }
            }
          },
          {
            show: false,
            reversed: false,
            seriesName: 'Financing',
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019'
              },
              formatter(value) { return `${value}`; }
            },
            title: {
              text: 'Revenue (thousand crores)',
              style: {
                color: '#FEB019'
              }
            },
            tooltip: {
              enabled: false
            }
          }
        ],
        tooltip: {
          fixed: {
            enabled: false,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
          formatter(value) { return `${value}`; }
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      }
    };
  }

  render() {
    return (
      <div className="px-2 py-3">
        <ReactApexChart
          ref={this.chartRef}
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}