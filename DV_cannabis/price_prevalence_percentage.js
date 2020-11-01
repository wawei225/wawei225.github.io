


const dataSource_percent_prive_preva = {
  chart: {
    caption: "Percentage change in consumer and producer price and the prevalence of cannabis (2008 – 2018)",
    yaxisname: "Percentage",
    showhovereffect: "1",
    drawcrossline: "1",
    xaxisname: "Year",
    plottooltext: "The percentage change of $seriesName is <b>$dataValue</b>",
    theme: "fusion",
    bgColor:"#F5FFFA"
  },

  categories: [
    {
      category: [
        {label: "2008"},
        {label: "2009"},
        {label: "2010"},
        {label: "2011"},
        {label: "2012"},
        {label: "2013"},
        {label: "2014"},
        {label: "2015"},
        {label: "2016"},
        {label: "2017"},
        {
            "vline": "true",
            "lineposition": "0",
            "color": "#000000",
            "labelHAlign": "center",
            "labelPosition": "0",
            "label": "Cannabis Act passed",
            "dashed": "1"
        },
        {label: "2018"}
      ]
    }
  ], 
      dataset: [
        {
          seriesname: "Prevalence of Cannabis",
          linethickness: "3",
          color: "#00955d",
          dashed: "1",
          anchorSides: "3",          
          data: [
        {value: "-21.12"}, {value: "-18.32"},{value: "-14.83"},
        {value: "-8.23"}, {value: "-5.76"},{value: "-0.55"},
        {value: "4.90"}, {value: "10.64"},{value: "16.92"},
        {value: "17.06"}, {value: "19.28"}
          ]
        },
        {
          seriesname: "Consumer Price",
          linethickness: "3",
          color: "#DE542C",
          data: [
        {value: "13.30"}, {value: "6.31"},{value: "2.33"},
        {value: "3.30"}, {value: "5.11"},{value: "6.43"},
        {value: "2.70"}, {value: "-2.85"},{value: "-7.19"},
        {value: "-13.82"}, {value: "-15.63"}
          ]
        },
        {
          seriesname: "Producer Price",
          linethickness: "3",
          color: "#deac2c",
          anchorSides: "4",
          dashed: "3",
          data: [
        {value: "14.63"}, {value: "7.51"},{value: "3.58"},
        {value: "3.76"}, {value: "4.14"},{value: "4.14"},
        {value: "0.77"}, {value: "-4.48"},{value: "-7.47"},
        {value: "-12.34"}, {value: "-14.22"}
          ]
        }       
      ],
              "trendlines": [{
          "line": [{
            "startvalue": "0",
            "color": "#000000",
            "thickness": "5"
          }]
        }]      
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "msline",
    renderAt: "chart-container-11-2",
    width: "75%",
    height: "60%",
    dataFormat: "json",
    dataSource: dataSource_percent_prive_preva
  }).render();
});
