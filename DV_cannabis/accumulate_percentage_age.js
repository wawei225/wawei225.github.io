


const dataSource_percent_age_freq = {
  chart: {
    caption: "Percentage change in the violent crime rates and the prevalence of cannabis (2008 – 2018)",
    yaxisname: "Percentage",
    showhovereffect: "1",
    xaxisname: "Year",
    drawcrossline: "1",
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
          seriesname: "15 to 17 years",
          linethickness: "3",
          color: "#7c4bda",
          data: [
        {value: "16.60"}, {value: "12.11"},{value: "7.85"},
        {value: "6.60"}, {value: "0.02"},{value: "-3.71"},
        {value: "-7.30"}, {value: "-10.57"},{value: "-7.36"},
        {value: "-8.69"}, {value: "-5.55"}
          ]
        },
        {
          seriesname: "18 to 24 years",
          linethickness: "3",
          color: "#72aca1",
          data: [
        {value: "1.46"}, {value: "0.55"},{value: "-0.30"},
        {value: "1.64"}, {value: "-1.51"},{value: "-1.98"},
        {value: "-2.34"}, {value: "-2.43"},{value: "1.74"},
        {value: "0.96"}, {value: "2.22"}
          ]
        },
        {
          seriesname: "25 to 44 years",
          linethickness: "3",
          color: "#ef8fad",
          data: [
        {value: "-18.57"}, {value: "-16.65"},{value: "-13.90"},
        {value: "-7.91"}, {value: "-5.94"},{value: "-1.17"},
        {value: "3.91"}, {value: "9.30"},{value: "15.85"},
        {value: "16.51"}, {value: "18.55"}
          ]
        },
        {
          seriesname: "45 to 64 years",
          linethickness: "3",
          color: "#DE542C",          
          data: [
        {value: "-25.90"}, {value: "-21.44"},{value: "-16.57"},
        {value: "-8.84"}, {value: "-5.42"},{value: "0.61"},
        {value: "6.76"}, {value: "13.15"},{value: "18.92"},
        {value: "18.08"}, {value: "20.65"}
          ]
        },
        {
          seriesname: "Major violent crimes",
          linethickness: "4",         
          label: "Cannabis Act passed",
          color: "#2346cd",
          dashed: "1",
          anchorSides: "3",
          data: [
        {value: "12.54"}, {value: "10.96"},{value: "10.54"},
        {value: "10.45"}, {value: "5.60"},{value: "-1.93"},
        {value: "-6.68"}, {value: "-8.16"},{value: "-9.58"},
        {value: "-10.95"}, {value: "-12.78",tooltext: "Major Violent Crimes"}
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
    renderAt: "chart-container-7-2",
    width: "75%",
    height: "60%",
    dataFormat: "json",
    dataSource: dataSource_percent_age_freq
  }).render();
});
