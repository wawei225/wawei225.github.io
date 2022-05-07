const dataSource_age_crime_cannabis = {
  chart: {
    caption: "Crime Rate and Cannabis Prevalence (fixed age group)",
    drawcrossline: "1",
    subcaption: "2008-2018",
    yaxisname: "Crime Rate (per 100,000 person)",
    syaxisname: "Cannabis Usage Rate (per 100,000 person)",
    showvalues: "0",
    showanchors: "0",
    plothighlighteffect: "fadeout",
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
      seriesname: "Total major violent crimes",
      plottooltext: "Crime rate in $label : <b>$dataValue</b>",
      color: "#000000",
      data: [
        {value: "1204.21"}, {value: "1187.36"},{value: "1182.82"},
        {value: "1181.85"}, {value: "1130.02"},{value: "1049.39"},
        {value: "998.55"}, {value: "982.81"},{value: "967.53"},
        {value: "952.94"}, {value: "933.35"}
      ]
    },
    {
      seriesname: "Less than once per month",
      parentyaxis: "S",
      renderas: "line",
      drawAnchors: "1",
      showvalues: "0",
      plottooltext: "$value %",
      bgColor:"#F5FFFA",
      data: [
        {value: "3859.53"}, {value: "3918.87"},{value: "3999.45"},
        {value: "4212.89"}, {value: "4229.25"},{value: "4365.90"},
        {value: "4511.39"}, {value: "4669.40"},{value: "4912.19"},
        {value: "4902.53"}, {value: "4991.80"}
      ]
    },
    {
      seriesname: "Once per month",
      parentyaxis: "S",
      renderas: "line",
      drawAnchors: "1",
      showvalues: "0",
      plottooltext: "$value %",
      bgColor:"#F5FFFA",
      data: [
        {value: "619.95"}, {value: "618.31"},{value: "618.78"},
        {value: "638.27"}, {value: "626.98"},{value: "633.32"},
        {value: "640.76"}, {value: "650.02"},{value: "680.73"},
        {value: "677.23"}, {value: "690.09"}
      ]
    },
    {
      seriesname: "One to three times per month",
      parentyaxis: "S",
      renderas: "line",
      drawAnchors: "1",
      showvalues: "0",
      plottooltext: "$value %",
      bgColor:"#F5FFFA",
      data: [
        {value: "1936.29"}, {value: "1953.53"},{value: "1980.27"},
        {value: "2071.39"}, {value: "2064.85"},{value: "2116.93"},
        {value: "2173.20"}, {value: "2235.61"},{value: "2349.41"},
        {value: "2343.70"}, {value: "2385.91"}
      ]
    },
    {
      seriesname: "At least once per week",
      parentyaxis: "S",
      renderas: "line",
      drawAnchors: "1",
      showvalues: "0",
      plottooltext: "$value %",
      bgColor:"#F5FFFA",
      data: [
        {value: "2778.42"}, {value: "2819.10"},{value: "2875.21"},
        {value: "3026.88"}, {value: "3037.09"},{value: "3133.76"},
        {value: "3236.87"}, {value: "3349.03"},{value: "3523.58"},
        {value: "3517.48"}, {value: "3580.96"}
      ]
    },
    {
      seriesname: "Daily",
      parentyaxis: "S",
      renderas: "line",
      drawAnchors: "1",
      showvalues: "0",
      plottooltext: "$value %",
      bgColor:"#F5FFFA",
      data: [
        {value: "1494.57"}, {value: "1519.23"},{value: "1551.75"},
        {value: "1635.53"}, {value: "1642.54"},{value: "1696.07"},
        {value: "1752.92"}, {value: "1814.57"},{value: "1908.24"},
        {value: "1903.62"}, {value: "1937.99"}
      ]
    }            
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "mscombidy2d",
    renderAt: "chart-container-6",
    width: "75%",
    height: "75%",
    dataFormat: "json",
    dataSource: dataSource_age_crime_cannabis
  }).render();
});
