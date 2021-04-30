/* global Highcharts, axios */

const fetchGithubInfo = async (url) => {
  console.log(`Fetching ${url}`);
  const githubInfo = await axios(url); // API call to get user info from Github.
  return [
    // Stars:
    githubInfo.data.stargazers_count,
    // Watchers:
    githubInfo.data.subscribers_count,
    // Forks:
    githubInfo.data.forks_count,
  ];
};

const fetchRepoInfo = async (repos) => {
  const requests = repos.map((repo) => {
    const url = `https://api.github.com/repos/${repo}`;
    return fetchGithubInfo(url).then((user) => {
      return user;
    });
  });
  return Promise.all(requests);
};
const names = ["Angular", "Ember", "React", "Svelte", "Vue"];
const dataPoints = fetchRepoInfo([
  "angular/angular.js",
  "emberjs/ember.js",
  "facebook/react",
  "sveltejs/svelte",
  "vuejs/vue",
]).then((dataPoints) => {
  Highcharts.chart("container", {
    chart: {
      type: "column",
    },
    title: {
      text: "JavaScript Frameworks: Stars, Watchers, and Forks",
    },
    subtitle: {
      text: "Source: GitHub API",
    },
    xAxis: {
      categories: ["Stars", "Watchers", "Forks"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Users",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: names[0],
        data: dataPoints[0],
      },
      {
        name: names[1],
        data: dataPoints[1],
      },
      {
        name: names[2],
        data: dataPoints[2],
      },
      {
        name: names[3],
        data: dataPoints[3],
      },
      {
        name: names[4],
        data: dataPoints[4],
      },
    ],
  });
});
