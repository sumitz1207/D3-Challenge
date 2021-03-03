function updateChart() {

  let margin = {
  top: 20,
  bottom: 80,
  right: 40,
  left:100
  };

  let w = 960 - margin.right - margin.left;
  let h = 500 - margin.bottom - margin.top;
  
  //make wrapper and append the svg group using the calculated height and width
  let wrapper = d3.select("#scatter")
      .append("svg")
      .attr("width", 960)
      .attr("height", 500);
  //set graphData to wrapper 
  let graphData = wrapper.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //import data using csv d3 function
  d3.csv("assets/data/data.csv")
      .then(function(riskData){
  
  //data grabbed from the csv file and set
      riskData.forEach(function(data) {
          data.healthcare = +data.healthcare;
          data.poverty = +data.poverty;

      });
  //Create scales for X and Y
      let xl = d3.scaleLinear()
          .domain([8.5, d3.max(riskData, d => d.poverty)])
          .range([0, w]);
  
      let yl = d3.scaleLinear()
          .domain([3.5, d3.max(riskData, d => d.healthcare)])
          .range([h, 0]);
  

  //the x and y axis formatting
      let xAxis = d3.axisBottom(xl);
      let yAxis = d3.axisLeft(yl);
  
  //graph data appends the x and y axes
      graphData.append("g")
      .attr("transform", `translate(0, ${h})`)
      .call(xAxis);
  
      graphData.append("g")
      .call(yAxis);

}