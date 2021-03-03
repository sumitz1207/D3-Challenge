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

}