const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const svg = d3.select('svg')
const width = +svg.attr('width');
const height = +svg.attr('height');
const g = svg.append('g')
  .attr('transform', `translate(32, ${height / 2})`);
  
const update = data => {
  // Join new data with old elements (if any)
  const text = g.selectAll('text')
    .data(data);
  
  // Update old elements as needed
  text.attr('class', 'update');
  
  // Create new elements as needed
  // Merges new elements
  // Applies operations to both new and updated
  text.enter()
    .append('text')
    .attr('class', 'enter')
    .attr('dy', '.35em')
    .text(d => d)
    .merge(text)
    .attr('x', (d, i) => i * 32);
  
  // Remove old elements
  text.exit().remove();
};

update(alphabet);

d3.interval(() => {
  update(d3.shuffle(alphabet)
    .slice(0, Math.floor(Math.random() * 26))
    .sort());
}, 1500);