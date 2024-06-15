const data = [ {x: 50, y: 50}, {x: 100, y:100}, {x: 150, y:150} ];

d3.select('body').selectAll('.data-point')
.data(data)
.enter().append('div')
.attr('class', 'data-point')
.style('left', d => `${d.x}px`)
.style('top', d => `${d.y}px`)
.on('mouseover', function() {
    d3.select(this).style('background-color', 'firebrick');
})
.on('mouseout', function() {
    d3.select(this).style('background-color', 'gray');
});