


const dataSource_percent_GDP_preva = {
  chart: {
    caption: "Percentage change in the GDP and the prevalence of cannabis (2008 – 2018)",
    yaxisname: "Percentage",
    showhovereffect: "1",
    drawcrossline: "1",
    xaxisname: "Year",
    plottooltext: "The percentage change of $seriesName is <b>$dataValue</b>",
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
          seriesname: "Prevalence of Cannabis",
          linethickness: "5",
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
          seriesname: "GDP",
          linethickness: "3",
          color: "#DE542C",
          data: [
        {value: "-7.21"}, {value: "-10.57"},{value: "-11.76"},
        {value: "-6.69"}, {value: "-0.95"},{value: "6.31"},
        {value: "6.24"}, {value: "4.08"},{value: "0.07"},
        {value: "-8.16"}, {value: "28.66"}
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
    renderAt: "chart-container-10-2",
    width: "75%",
    height: "75%",
    dataFormat: "json",
    dataSource: dataSource_percent_GDP_preva
  }).render();
});
