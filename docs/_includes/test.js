google.charts.load('current', {'packages':['treemap']});
      google.charts.setOnLoadCallback(drawChart);

        function drawChart(){
          var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1xt4Y4mLEnN_tiuGoLYwcKE_YyUyQ35RcPysZ5DTn2DE/gviz/tq");
          query.send(handleQueryResponse);
        }

      function handleQueryResponse(response) {
        var data = response.getDataTable();

        tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

        tree.draw(data, {
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          hintOpacity: 0.5,
          maxDepth: 1,
          maxPostDepth: 3,
          showScale: true
        });

      }
