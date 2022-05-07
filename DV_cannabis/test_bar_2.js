const dataSource_violent_combined = {
  chart: {
    caption: "Percentage change in the violent crime rate in Colorado and Canada (2008 - 2018)",
    subcaption: " ",
    yaxisname: "Percentage",
    xaxisname: "Year",
    showhovereffect: "1",
    drawcrossline: "1",
    plottooltext: "The percentage change of $seriesName is <b>$dataValue</b> %",
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
                {
            "vline": "true",
            "lineposition": "0",
            "labelPosition": "10",
            "alpha": "50",
            "color": "#1c7f08",
            "labelHAlign": "center",
            "labelVAlign": "top",
            "label": "Cannabis Amendent passed in Colorado",
            "dashed": "1"
        },
        {label: "2013"},
        {label: "2014"},
                {
            "vline": "true",
            "lineposition": "0",
            "color": "#1c7f08",
            "labelHAlign": "center",
            "labelVAlign": "bottom",
            "labelPosition": "0",
            "label": "Cannabis legalised in Colorado",
            "dashed": "1"
        },
        {label: "2015"},
        {label: "2016"},
        {label: "2017"},
        {
            "vline": "true",
            "lineposition": "0",
            "color": "#7f081c",
            "labelHAlign": "center",
            "labelPosition": "0",
            "label": "Cannabis Act passed in Canada",
            "dashed": "1"
        },
        {label: "2018"}
      ]
    }
  ], 

      dataset: [
        {
          seriesname: "Violent Crime Rate in Colorado",
          linethickness: "3",
          color: "#1c7f08",
          data: [
            {value: "-2.87"}, {value: "-0.99"},{value: "-2.06"},
            {value: "-3.66"}, {value: "-8.21"},{value: "-7.69"},
            {value: "-7.36"}, {value: "-2.81"},{value: "2.46"},
            {value: "12.79"}, {value: "20.40"}
          ]
        },
        {
          seriesname: "Violent Crime Rate in Canada",
          linethickness: "3",
          color: "#7f081c",
          data: [
            {value: "13.57"}, {value: "12.50"},{value: "9.92"},
            {value: "5.17"}, {value: "2.03"},{value: "-6.75"},
            {value: "-11.13"}, {value: "-8.91"},{value: "-8.42"},
            {value: "-5.29"}, {value: "-2.68"}
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
    renderAt: "chart-container-plot1_test",
    width: "75%",
    height: "60%",
    dataFormat: "json",
    dataSource: dataSource_violent_combined
  }).render();
});

