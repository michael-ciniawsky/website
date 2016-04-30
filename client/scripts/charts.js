// ------------------------------------
//    #CHARTS
// ------------------------------------

import Chart from 'chart.js'
import data from './charts.json'

let chart = JSON.parse(data)

let charts = (function () {
 window.onload = function () {
    const ctx = document.getElementById('chart-html').getContext('2d')
    window.HTMLBar = new Chart(ctx).Bar(chart.html, {
      responsive: true
    })

    const ctx1 = document.getElementById('chart-css').getContext('2d')
    window.CSSBar = new Chart(ctx1).Bar(chart.css, {
      responsive: true
    })

    const ctx2 = document.getElementById('chart-js').getContext('2d')
    window.JSBar = new Chart(ctx2).Bar(chart.js, {
      responsive: true
    })
  }
}())

export default charts
