import React from 'react'
import {createUseStyles} from 'react-jss'
import Chart from "react-apexcharts";


const useStyles = createUseStyles({
    ordinalStatItem:{
      margin:'0 auto'
    }

})

const adaptedAgreeOptions = [
  ["Strongly", "disagree"],
  ["Somewhat", "disagree"],
  ["Neutral", " "],
  ["Somewhat", "agree"],
  ["Strongly", "agree"]
]

const adaptedGrader = 
[
  "Not at all", ["To a", "low degree"], "Some degree", "High degree", "Very high degree"
]


const adaptedHurNöjd =
[
    ["Very", "dissatisfied"], ["Somewhat", "dissatisfied"], ["Neither satisfied", "nor dissatisfied"], ["Somewhat", "satisfied"], ["Very", "satisfied"]
]




const getAdaptedOptions = (options) =>
{
    switch(options[0])
    {
      case "Strongly disagree":
        return adaptedAgreeOptions
      case "Very dissatisfied":
        return adaptedHurNöjd
      case "Not at all":
        return adaptedGrader
      default:
        return ["oj","något","gick","fel","!"]
    }
}

function  getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

var data = [
  [1,1,1,1,1],
  [4,6,9,21,11],
  [1,1,1,1,1],
  [1,2,1,1,1],
  [1,1,3,1,1],
  [1,1,5,14,18],
  [2,6,15,7,1],
  [7,3,10,14,6],
  [8,7,10,7,7],
  [2,1,3,8,18],
  [6,7,8,6,4],
  [2,6,7,13,3],
  [15,6,5,1,1],
  [3,9,10,2,2],
  [1,2,7,16,8],
]



const OrdinalStatItem = ({options,count, value}) =>{

  
  const series = [
    {
      name: "Antal",
      data: data[count]
    }
  ]


  const getColors = () => {
    var colors = ['#bdbdbd','#bdbdbd','#bdbdbd','#bdbdbd','#bdbdbd']
    var letters = '9ABC';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    

    if(value !== undefined)
    {
      colors[value] = "rgb(32, 106, 176)";
      console.log(colors)
      
    }
    return colors;
  }
  

  const settings = {
      grid:{
        show:false
      },
      plotOptions:{
        bar:{
          horizontal:false,
          distributed : true,

        }
      },
      yaxis:{
        show:false,
        max: Math.max(...series[0].data)
      },
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: getAdaptedOptions(options),
        labels:{
          style:{
            fontWeight:'500'
          }
          
        }
        
      },
      legend:{
        show:false
      },
      states:{
        hover:{
          filter:{
            type:'none',
          }
        },
        active:{
          filter:{
            type:'none',
          }
        },
      },
      tooltip:{
        enabled:false
      },
      colors: getColors(),
      dataLabels:{
        style: {
          colors: ['white'],
          fontSize:'16px',
        }
      }
    }



  const classes = useStyles()
  return(
      <div  className={classes.ordinalStatItem}>
          <Chart
          options= {settings}
          series = {series}
          type ="bar"
          width ="550"
          height ="300"
          />

      </div>
  )
}

export default OrdinalStatItem;