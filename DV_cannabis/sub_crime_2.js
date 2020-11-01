const dataSource_subcrime_2 = {
  chart: {
    caption: "Percentage change for the major violent crime types in Canada (2008 – 2018)",
    yaxisname: "Percentage change relative to a 10-year average value",
    showhovereffect: "1",
    drawcrossline: "1",
    xaxisname: "Year",
    plottooltext: "Percentage change of $seriesName is <b>$dataValue</b> %",
    theme: "fusion",
    bgColor:"#F5FFFA",
    "chartTopMargin": "0",
    "chartBottomMargin": "180"    
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
          seriesname: "Total Drug Violation",
          linethickness: "3",
          data: [
            {value: "5.75"}, {value: "0.14"},{value: "10.41"},
            {value: "13.47"}, {value: "9.02"},{value: "6.89"},
            {value: "1.39"}, {value: "-3.88"},{value: "-8.12"},
            {value: "-12.52"}, {value: "-22.56"}
          ]
        },
        {
          seriesname: "Total Impaired Driving",
          linethickness: "3",
          data: [
            {value: "12.67"}, {value: "16.13"},{value: "13.45"},
            {value: "15.41"}, {value: "7.21"},{value: "-2.23"},
            {value: "-6.92"}, {value: "-10.97"},{value: "-12.66"},
            {value: "-16.35"}, {value: "-15.75"}
          ]
        },
        {
          seriesname: "Total Robbery",
          linethickness: "3",
          data: [
            {value: "30.39"}, {value: "29.26"},{value: "20.02"},
            {value: "16.17"}, {value: "7.03"},{value: "-11.26"},
            {value: "-20.90"}, {value: "-16.92"},{value: "-18.57"},
            {value: "-16.33"}, {value: "-18.88"}
          ]
        },
        {
          seriesname: "Assualt",
          linethickness: "3",
          data: [
            {value: "13.81"}, {value: "12.24"},{value: "7.75"},
            {value: "5.37"}, {value: "2.54"},{value: "-5.71"},
            {value: "-9.26"},  {value: "-8.05"}, {value: "-7.26"},
            {value: "-6.60"},{value: "-4.47"}
          ]
        },
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
    renderAt: "chart-container-4",
    width: "75%",
    height: "75%",
    dataFormat: "json",
    dataSource: dataSource_subcrime_2
  }).render();
});

