FusionCharts.ready(function () {
    var yearlyData = {

        "LessThanOnce": {
              chart: {
                caption: "Cannabis prevalence among different age groups (2008-2018)",
                yaxisname: "Consuming Rate (per 100,000 person)",
                showhovereffect: "1",
                drawcrossline: "1",
                plottooltext: "Cannabis prevalence among $seriesName is <b>$dataValue</b>",
                theme: "fusion",
                xaxisname: "Year",
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
                      data: [
                        {value: "320.49"}, {value: "308.16"},{value: "296.45"},
                        {value: "293.02"}, {value: "274.92"},{value: "264.67"},
                        {value: "254.82"}, {value: "254.81"},{value: "254.64"},
                        {value: "250.98"}, {value: "259.62"}
                      ]
                    },
                    {
                      seriesname: "18 to 24 years",
                      linethickness: "3",
                      data: [
                        {value: "1236.35"}, {value: "1225.27"},{value: "1214.88"},
                        {value: "1238.45"}, {value: "1200.09"},{value: "1194.37"},
                        {value: "1190.01"}, {value: "1188.96"},{value: "1239.67"},
                        {value: "1230.17"}, {value: "1245.58"}
                      ]
                    },
                    {
                      seriesname: "25 to 44 years",
                      linethickness: "3",
                      data: [
                        {value: "1524.54"}, {value: "1560.41"},{value: "1611.95"},
                        {value: "1724.07"}, {value: "1760.97"},{value: "1850.32"},
                        {value: "1945.37"}, {value: "2046.36"},{value: "2168.98"},
                        {value: "2181.32"}, {value: "2218.49"}
                      ]
                    },
                    {
                      seriesname: "45 to 64 years",
                      linethickness: "3",
                      data: [
                        {value: "778.15"}, {value: "825.02"},{value: "876.17"},
                        {value: "957.35"}, {value: "993.28"},{value: "1056.54"},
                        {value: "1121.19"},  {value: "1188.27"}, {value: "1248.90"},
                        {value: "1240.06"},{value: "1267.10"}
                      ]
                    },
                  ]

        },

        "Once": {
              chart: {
                caption: "Cannabis Prevalence among different age groups (2008-2018)",
                yaxisname: "Consuming Rate (per 100,000 person)",
                subcaption: "2008-2018",
                showhovereffect: "1",
                drawcrossline: "1",
                xaxisname: "Year",
                plottooltext: "Consuming rate among $seriesName is <b>$dataValue</b>",
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
                        "color": "#62B58F",
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
                      data: [
                        {value: "149.91"}, {value: "144.14"},{value: "138.66"},
                        {value: "137.06"}, {value: "128.60"},{value: "123.80"},
                        {value: "119.19"}, {value: "114.98"},{value: "119.11"},
                        {value: "117.40"}, {value: "121.44"}
                      ]
                    },
                    {
                      seriesname: "18 to 24 years",
                      linethickness: "3",
                      data: [
                        {value: "280.99"}, {value: "278.47"},{value: "276.11"},
                        {value: "281.47"}, {value: "272.75"},{value: "271.45"},
                        {value: "270.46"}, {value: "270.22"},{value: "281.74"},
                        {value: "279.58"}, {value: "283.09"}
                      ]
                    },
                    {
                      seriesname: "25 to 44 years",
                      linethickness: "3",
                      data: [
                        {value: "129.20"}, {value: "132.24"},{value: "136.61"},
                        {value: "146.11"}, {value: "149.24"},{value: "156.81"},
                        {value: "164.86"}, {value: "173.42"},{value: "183.81"},
                        {value: "184.86"}, {value: "188.09"}
                      ]
                    },
                    {
                      seriesname: "45 to 64 years",
                      linethickness: "3",
                      data: [
                        {value: "56.86"}, {value: "63.46"},{value: "67.40"},
                        {value: "73.64"}, {value: "76.41"},{value: "81.27"},
                        {value: "86.25"},  {value: "91.41"}, {value: "96.07"},
                        {value: "95.39"},{value: "97.47"}
                      ]
                    },
                  ]
        },

        "ThreeMonth": {
              chart: {
                caption: "Cannabis Prevalence among different age groups (2008-2018)",
                yaxisname: "Consuming Rate (per 100,000 person)",
                subcaption: "2008-2018",
                showhovereffect: "1",
                xaxisname: "Year",
                drawcrossline: "1",
                plottooltext: "Consuming rate among $seriesName is <b>$dataValue</b> ",
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
                        "color": "#62B58F",
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
                      data: [
                        {value: "227.45"}, {value: "218.70"},{value: "210.38"},
                        {value: "207.95"}, {value: "195.11"},{value: "187.83"},
                        {value: "180.84"}, {value: "174.45"},{value: "180.71"},
                        {value: "178.12"}, {value: "184.25"}
                      ]
                    },
                    {
                      seriesname: "18 to 24 years",
                      linethickness: "3",
                      data: [
                        {value: "741.81"}, {value: "735.16"},{value: "728.93"},
                        {value: "743.07"}, {value: "720.05"},{value: "716.62"},
                        {value: "714.00"}, {value: "713.37"},{value: "743.80"},
                        {value: "738.10"}, {value: "747.35"}
                      ]
                    },
                    {
                      seriesname: "25 to 44 years",
                      linethickness: "3",
                      data: [
                        {value: "697.67"}, {value: "714.09"},{value: "737.67"},
                        {value: "788.98"}, {value: "805.87"},{value: "846.75"},
                        {value: "890.25"}, {value: "936.47"},{value: "992.58"},
                        {value: "998.23"}, {value: "1015.70"}
                      ]
                    },
                    {
                      seriesname: "45 to 64 years",
                      linethickness: "3",
                      data: [
                        {value: "269.36"}, {value: "285.58"},{value: "303.29"},
                        {value: "331.39"}, {value: "343.83"},{value: "365.73"},
                        {value: "388.10"},  {value: "411.32"}, {value: "432.31"},
                        {value: "429.25"},{value: "438.61"}
                      ]
                    },
                  ]
        },

        "OnceWeek": {
              chart: {
                caption: "Cannabis Prevalence among different age groups (2008-2018)",
                yaxisname: "Consuming Rate (per 100,000 person)",
                subcaption: "2008-2018",
                showhovereffect: "1",
                xaxisname: "Year",
                drawcrossline: "1",
                plottooltext: "Consuming rate among $seriesName is <b>$dataValue</b> ",
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
                        "color": "#62B58F",
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
                      data: [
                        {value: "222.28"}, {value: "213.73"},{value: "205.60"},
                        {value: "203.22"}, {value: "190.67"},{value: "183.56"},
                        {value: "176.73"}, {value: "170.48"},{value: "176.60"},
                        {value: "174.07"}, {value: "180.06"}
                      ]
                    },
                    {
                      seriesname: "18 to 24 years",
                      linethickness: "3",
                      data: [
                        {value: "910.40"}, {value: "902.24"},{value: "894.59"},
                        {value: "911.95"}, {value: "883.70"},{value: "879.49"},
                        {value: "876.28"}, {value: "875.51"},{value: "912.85"},
                        {value: "905.85"}, {value: "917.20"}
                      ]
                    },
                    {
                      seriesname: "25 to 44 years",
                      linethickness: "3",
                      data: [
                        {value: "1136.95"}, {value: "1163.70"},{value: "1202.13"},
                        {value: "1285.75"}, {value: "1313.26"},{value: "1379.90"},
                        {value: "1450.78"}, {value: "1526.10"},{value: "1617.54"},
                        {value: "1626.75"}, {value: "1655.21"}
                      ]
                    },
                    {
                      seriesname: "45 to 64 years",
                      linethickness: "3",
                      data: [
                        {value: "508.79"}, {value: "539.44"},{value: "572.88"},
                        {value: "625.96"}, {value: "649.45"},{value: "690.82"},
                        {value: "733.08"},  {value: "776.94"}, {value: "816.59"},
                        {value: "810.81"},{value: "828.49"}
                      ]
                    },
                  ]
        },

        "Daily": {
              chart: {
                caption: "Cannabis Prevalence among different age groups (2008-2018)",
                yaxisname: "Consuming Rate (per 100,000 person)",
                subcaption: "2008-2018",
                showhovereffect: "1",
                xaxisname: "Year",
                drawcrossline: "1",
                plottooltext: "Consuming rate among $seriesName is <b>$dataValue</b>",
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
                        "color": "#62B58F",
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
                      data: [
                        {value: "97.69"}, {value: "93.93"},{value: "90.36"},
                        {value: "89.31"}, {value: "83.80"},{value: "80.67"},
                        {value: "77.67"}, {value: "74.92"},{value: "77.62"},
                        {value: "76.50"}, {value: "79.13"}
                      ]
                    },
                    {
                      seriesname: "18 to 24 years",
                      linethickness: "3",
                      data: [
                        {value: "520.39"}, {value: "515.72"},{value: "511.35"},
                        {value: "521.27"}, {value: "505.12"},{value: "502.72"},
                        {value: "500.88"}, {value: "500.44"},{value: "521.78"},
                        {value: "517.78"}, {value: "524.27"}
                      ]
                    },
                    {
                      seriesname: "25 to 44 years",
                      linethickness: "3",
                      data: [
                        {value: "537.14"}, {value: "549.78"},{value: "567.94"},
                        {value: "607.44"}, {value: "620.44"},{value: "651.93"},
                        {value: "685.41"}, {value: "721.00"},{value: "764.20"},
                        {value: "768.55"}, {value: "782.00"}
                      ]
                    },
                    {
                      seriesname: "45 to 64 years",
                      linethickness: "3",
                      data: [
                        {value: "339.35"}, {value: "359.79"},{value: "382.10"},
                        {value: "417.50"}, {value: "433.17"},{value: "460.76"},
                        {value: "488.95"},  {value: "518.21"}, {value: "544.65"},
                        {value: "540.79"},{value: "552.59"}
                      ]
                    },
                  ]
        }
    };
    var revenueChart = new FusionCharts({
        type: 'msline',
        renderAt: 'chart-container-5',
        width: '75%',
        height: '75%',
        dataFormat: 'json',
        dataSource: yearlyData.LessThanOnce
    }).render();

        var year = document.getElementById("set_json_data");

    function change() {
        var data = yearlyData[year.value];
        revenueChart.setJSONData(data);
    }
    year.addEventListener("change", change);


});