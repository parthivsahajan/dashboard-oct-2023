import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {
   chartOptions={}
   Highcharts=Highcharts
   constructor(){
    this.chartOptions={
      chart: {
          type: 'spline'
      },
      title: {
          text: 'Monthly Average Placements'
      },
      credits: {
        enabled:false
      },
      subtitle: {
          text: 'Luminar Technolab ' +
              '<a href="https://www.luminartechnolab.com/" ' +
              'target="_blank">Wikipedia.com</a>'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          accessibility: {
              description: 'Months of the year'
          }
      },
      yAxis: {
          title: {
              text: 'Placements'
          }
      },
      tooltip: {
          crosshairs: true,
          shared: true
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      series: [{
          name: 'Big Data',
          marker: {
              symbol: 'square'
          },
          data: [5.2, 6, 8.7, 13.9, 18.2, 21.4, 25.0, {
              y: 26.4,
              accessibility: {
                  description: 'Sunny symbol, this is the warmest point in the chart.'
              }
          }, 22.8, 17.5, 12.1, 7.6]
  
      },{
        name: 'Testing',
        marker: {
            symbol: 'square'
        },
        data: [7, 8 , 12 , 16, 20 , 25 , 29, 30, 28 ,{
            y: 26.4,
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        }, 22.8, 17.5, 12.1, 7.6]

    },{
        name: 'Python',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 1.5,
           
            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the chart.'
            }
        }, 3, 4, 5, 10, 13, 14, 14.4, 11, 8, 4, 2]
    }, {
          name: 'MEARN',
          marker: {
              symbol: 'diamond'
          },
          data: [{
              y: 1.5,
             
              accessibility: {
                  description: 'Snowy symbol, this is the coldest point in the chart.'
              }
          }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
      }]
  }
  HC_exporting(Highcharts);

   }

}


