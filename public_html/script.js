   const xValues = [50,60,70,80,90,100,110,120,130,140,150];
                        const yValues = [7,8,8,9,9,9,10,11,14,14,15];

                        new Chart("myChart", {
                          type: "line",
                          data: {
                            labels: xValues,
                            datasets: [{
                            label:"Simple Data",
                              fill: false,
                              lineTension: 0,
                              backgroundColor: "rgba(0,0,255,1.0)",
                              borderColor: "rgba(0,0,255,0.1)",
                              data: yValues
                            }]
                          },
                          options: {
                          title:{display: true, text:"Current drown P/Minute"},
                            legend: {display: true, position: 'top'},
                            scales: {
                              yAxes: [{
                              scaleLabel:{
                              display: true,
                              labelString: 'Current'},
                              ticks: {min: 6, max:16}}],
                              xAxes: [{
                                scaleLabel: {
                                  display: true,
                                 labelString: 'Minute' 
                                }
                              }]
                            }
                          }
                        });