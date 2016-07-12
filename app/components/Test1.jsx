import React from 'react';
import Highcharts from 'react-highcharts/dist/ReactHighstock';
import data from '../../data/stock.json';

const config = {
  rangeSelector: {
    selected: 1
  },
  title: {
    text: 'Stock Price'
  },
  series: [{
    name: 'Price',
    data: data,
    tooltip: {
      valueDecimals: 2
    }
  }]
};

export default class Test1 extends React.Component {
  render() {
    return (
      <div className="col-lg-12 text-center">
        <h1>Test1 - Highcharts Example</h1>
        <Highcharts config = {config}></Highcharts>
      </div>
    );
  }
}
