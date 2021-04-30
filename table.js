Highcharts.chart("container", {
  data: {
    <thead>
            <tr>
              <th></th>
              <th>Jane</th>
              <th>John</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Apples</th>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <th>Pears</th>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <th>Plums</th>
              <td>5</td>
              <td>11</td>
            </tr>
            <tr>
              <th>Bananas</th>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <th>Oranges</th>
              <td>2</td>
              <td>4</td>
            </tr>
          </tbody>
  },
  chart: {
    type: "column",
  },
  title: {
    text: "Data extracted from a HTML table in the page",
  },
  yAxis: {
    allowDecimals: false,
    title: {
      text: "Units",
    },
  },
  tooltip: {
    formatter: function () {
      return "<b>" + this.series.name + "</b><br/>" + this.point.y + " " + this.point.name.toLowerCase();
    },
  },
});
