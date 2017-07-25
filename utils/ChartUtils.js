export default {

	lineChart: (data, selectedCurrency) => {

		var line_chart = d3.select(".line_chart");
		var margin = { top: 20, right: 20, bottom: 30, left: 50 };
		var width =+ line_chart.attr("width") - margin.left - margin.right;
		var height =+ line_chart.attr("height") - margin.top - margin.bottom;
		var g = line_chart.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var parseTime = d3.timeParse("%Y-%m-%d");

		var x = d3.scaleTime().rangeRound([0, width]);
		var y = d3.scaleLinear().rangeRound([height, 0]);
		// var z = d3.scaleOrdinal(d3.schemeCategory10);

		var line = d3.line()
			.curve(d3.curveBasis)
			.x((d) => { return x(d.date);})
			.y((d) => { return y(d.exchangeRate); });

		data.forEach((d) => {
			d.date = parseTime(d.date);
		});
		data.columns = ["date", selectedCurrency];

		var currencies = data.columns.slice(1).map((id) => {
			return {
				id: id,
				values: data.map((d) => {
					return {date: d.date, exchangeRate: d[id]};
				})
			};
		});

		x.domain(d3.extent(data, (d) => { return d.date; }));
		y.domain([
			d3.min(currencies, (c) => { return d3.min(c.values, (d) => { return d.exchangeRate; }); }),
			d3.max(currencies, (c) => { return d3.max(c.values, (d) => { return d.exchangeRate; }); })
		]);
		// z.domain(currencies.map((c) => { return c.id; }));

		g.append("g")
			.attr("class", "axis axis--x")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))
		.append("text")
			.attr("x", width)
			.attr("dx", "0.71em")
			.attr("fill", "#000")
			.text("Dates");

		g.append("g")
			.attr("class", "axis axis--y")
			.call(d3.axisLeft(y))
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("fill", "#000")
			.text("Exchange Rates");

		var currency = g.selectAll(".currency")
			.data(currencies)
			.enter().append("g")
				.attr("class", "currency");

		currency.append("path")
			.attr("class", "line")
			.attr("d", (d) => { return line(d.values); })
			.style("stroke", (d) => { return z(d.id); });

		currency.append("text")
			.datum((d) => { return {id: d.id, value: d.values[d.values.length - 1]}; })
			.attr("transform", (d) => { return "translate(" + x(d.value.date) + "," + y(d.value.exchangeRate) + ")"; })
			.attr("x", 3)
			.attr("dy", "0.35em")
			.style("font", "10px sans-serif")
			.text((d) => { return d.id; });
	}
}