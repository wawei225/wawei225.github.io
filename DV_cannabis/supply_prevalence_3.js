


const dataSource_supply_pre_3 = {
  chart: {
    theme: "fusion",
    caption: "The cannabis supply and the prevalence of cannabis (2008 – 2018)",
    xaxisminvalue: "5000",
    xaxismaxvalue: "10000",
    yaxisminvalue: "5000",
    yaxismaxvalue: "8000",
    showvalues: "1",
    xaxisname: "Prevalence of Cannabis (per 100,000 persons)",
    yaxisname: "Cannabis Supply (millions dollar)",
    plottooltext: "The cannabis supply in $displayValue is : $yvalue <br/> The prevalence of cannabis is : $xvalue",
    drawquadrant: "1",
    quadrantlabeltl: "Relatively Low Supply / Relatively High Prevalence",
    quadrantlabeltr: "High Supply / Relatively High Prevalence",
    quadrantlabelbl: "Relatively Low Supply / Relatively Low Prevalence",
    quadrantlabelbr: "Relatively High Supply / Relatively Low Prevalence",
    quadrantxval: "7500",
    quadrantyval: "6500",
    quadrantlinealpha: "50",
    quadrantlinethickness: "2",
    bgColor:"#F5FFFA"
  },
  categories: [
    {
      verticallinedashed: "1",
      verticallinedashlen: "1",
      verticallinedashgap: "1",
      verticallinethickness: "1",
      verticallinecolor: "#000000",
      category: [
        { x: "5000", label: "5000"},
        { x: "6000", label: "6000"},
        { x: "7000", label: "7000"},
        { x: "8000", label: "8000"},

                {
            "vline": "true",
            "lineposition": "0",
            "color": "#DE542C",
            "labelHAlign": "center",
            "labelPosition": "8876.01",
            "label": "Cannabis Act passed",
            "dashed": "1"
        },
        { x: "9000", label: "9000"},
        { x: "10000", label: "10000"}
      ]
    }
  ],

  dataset: [
    {
      seriesname: "age 25 to 64",
      anchorbgcolor: "#000000",
      anchorSides: "0",
      anchorBorderColor: "#000000",
      drawLine: "1",
      linecolor: "#000000",
      data: [
        {x: "5981.01", y: "6135", displayValue: "2008"}, {x: "6193.53", y: "5913", displayValue: "2009"},
        {x: "6458.14", y: "5877", displayValue: "2010"}, {x: "6958.19", y: "6197", displayValue: "2011"}, 
        {x: "7145.91", y: "6656", displayValue: "2012"}, {x: "7540.82", y: "7136", displayValue: "2013"},
        {x: "7954.26", y: "7180", displayValue: "2014"}, {x: "8389.49", y: "7066", displayValue: "2015"},
        {x: "8865.63", y: "6948", displayValue: "2016"}, 
        {x: "8876.01", y: "6619", displayValue: "2017", anchorBorderColor: "#DE542C", anchorBgColor: "#DE542C", anchorRadius: "6"}, 
        {x: "9044.75", y: "7857", displayValue: "2018"}
      ]
    }   
  ],



};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "scatter",
    renderAt: "chart-container-sup-pre-2",
    width: "75%",
    height: "75%",
    dataFormat: "json",
    dataSource: dataSource_supply_pre_3
  }).render();
});
