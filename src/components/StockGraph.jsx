import React, { useRef, useEffect, useState, useMemo } from "react";
import * as d3 from "d3";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Skeleton,
  useTheme,
} from "@chakra-ui/react";

const StockGraph = ({ stockData, symbol, isLoading = false }) => {
  // --- State and Refs ---
  const [activePeriod, setActivePeriod] = useState("1M");
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const chartRef = useRef(null);
  const theme = useTheme();

  // --- Style Adjustments ---
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const lineColor = useColorModeValue(
    theme.colors.red[500],
    theme.colors.red[400]
  );
  const textColor = useColorModeValue("gray.700", "gray.200");
  const tooltipBgColor = useColorModeValue("white", "gray.700");
  const buttonBg = useColorModeValue("gray.100", "gray.700");
  const buttonColor = useColorModeValue("gray.800", "gray.100");
  const activeBg = useColorModeValue("green.100", "green.700");
  const activeColor = useColorModeValue("green.800", "green.100");
  // Gradient Opacity
  const gradientOpacityStart = 0.4;
  const gradientOpacityEnd = 0;

  // --- Data Transformation ---
  const transformedData = useMemo(() => {
    if (
      !stockData ||
      !stockData["Time Series (Daily)"] ||
      Object.keys(stockData["Time Series (Daily)"]).length === 0
    ) {
      return null;
    }

    const timeSeriesData = stockData["Time Series (Daily)"];
    let dates;
    try {
      dates = Object.keys(timeSeriesData).sort(
        (a, b) => new Date(a) - new Date(b)
      );
      if (dates.length === 0) return null;
    } catch (error) {
      console.error("Error sorting dates:", error);
      return null;
    }

    let currentPrice;
    const lastDate = dates[dates.length - 1];
    if (timeSeriesData[lastDate] && timeSeriesData[lastDate]["4. close"]) {
      currentPrice = parseFloat(timeSeriesData[lastDate]["4. close"]);
    } else {
      // Fallback to find most recent valid price
      for (let i = dates.length - 1; i >= 0; i--) {
        const date = dates[i];
        if (timeSeriesData[date] && timeSeriesData[date]["4. close"]) {
          currentPrice = parseFloat(timeSeriesData[date]["4. close"]);
          break; // Found one
        }
      }
      if (currentPrice === undefined) return null; // No valid price found
    }

    const prices = dates
      .map((date) => {
        const priceStr = timeSeriesData[date]
          ? timeSeriesData[date]["4. close"]
          : undefined;
        const price = parseFloat(priceStr);
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime()) || isNaN(price)) {
          return null;
        }
        return { date: dateObj, price: price };
      })
      .filter((item) => item !== null);

    if (prices.length === 0) return null;

    return {
      currentPrice: isNaN(currentPrice)
        ? prices[prices.length - 1].price
        : currentPrice,
      prices,
    };
  }, [stockData]);

  // --- Data Filtering ---
  const filteredData = useMemo(() => {
    if (!transformedData) return null;

    const { prices, currentPrice } = transformedData;
    const now = new Date();
    let filteredPrices = prices;

    if (isNaN(now.getTime())) {
      return { currentPrice, prices };
    }

    try {
      switch (activePeriod) {
        case "1W":
          const oneWeekAgo = new Date(now);
          oneWeekAgo.setDate(now.getDate() - 7);
          filteredPrices = prices.filter((item) => item.date >= oneWeekAgo);
          break;
        case "1M":
          const oneMonthAgo = new Date(now);
          oneMonthAgo.setMonth(now.getMonth() - 1);
          if (oneMonthAgo.getMonth() === now.getMonth()) oneMonthAgo.setDate(0);
          filteredPrices = prices.filter((item) => item.date >= oneMonthAgo);
          break;
        case "6M":
          const sixMonthsAgo = new Date(now);
          sixMonthsAgo.setMonth(now.getMonth() - 6);
          if (sixMonthsAgo.getMonth() === (now.getMonth() + 6) % 12)
            sixMonthsAgo.setDate(0);
          filteredPrices = prices.filter((item) => item.date >= sixMonthsAgo);
          break;
        case "1Y":
          const oneYearAgo = new Date(now);
          oneYearAgo.setFullYear(now.getFullYear() - 1);
          filteredPrices = prices.filter((item) => item.date >= oneYearAgo);
          break;
        case "5Y":
          const fiveYearsAgo = new Date(now);
          fiveYearsAgo.setFullYear(now.getFullYear() - 5);
          filteredPrices = prices.filter((item) => item.date >= fiveYearsAgo);
          break;
        default:
          const defaultMonthAgo = new Date(now);
          defaultMonthAgo.setMonth(now.getMonth() - 1);
          if (defaultMonthAgo.getMonth() === now.getMonth())
            defaultMonthAgo.setDate(0);
          filteredPrices = prices.filter(
            (item) => item.date >= defaultMonthAgo
          );
          break;
      }
    } catch (error) {
      console.error("Error during data filtering:", error);
      return { currentPrice, prices };
    }

    return {
      currentPrice,
      prices: filteredPrices,
    };
  }, [transformedData, activePeriod]);

  // --- D3 Chart Rendering ---
  useEffect(() => {
    if (
      !filteredData ||
      !filteredData.prices ||
      !chartRef.current ||
      filteredData.prices.length === 0
    ) {
      d3.select(chartRef.current).selectAll("*").remove();
      return;
    }

    d3.select(chartRef.current).selectAll("*").remove();

    const renderChart = () => {
      try {
        // --- Dimensions ---
        const margin = { top: 60, right: 25, bottom: 20, left: 25 };
        const clientWidth = chartRef.current.clientWidth;
        if (clientWidth <= 0) return;
        const width = clientWidth - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;
        if (width <= 0 || height <= 0) return;

        const data = filteredData.prices;

        // --- Handle Single Data Point ---
        let plotData = data;
        let isSinglePoint = data.length === 1;
        if (isSinglePoint) {
          const singleDate = data[0].date;
          if (isNaN(singleDate.getTime())) return;
          const prevDate = new Date(singleDate);
          prevDate.setDate(singleDate.getDate() - 1);
          if (isNaN(prevDate.getTime())) return;
          plotData = [{ date: prevDate, price: data[0].price }, data[0]];
        }

        // --- Scales ---
        const xDomain = d3.extent(plotData, (d) => d.date);
        if (
          !xDomain[0] ||
          !xDomain[1] ||
          isNaN(xDomain[0].getTime()) ||
          isNaN(xDomain[1].getTime())
        )
          return;
        if (isSinglePoint) {
          const timeDiff = xDomain[1].getTime() - xDomain[0].getTime();
          if (timeDiff > 0) {
            xDomain[0] = new Date(xDomain[0].getTime() - timeDiff * 0.1);
            xDomain[1] = new Date(xDomain[1].getTime() + timeDiff * 0.1);
          } else {
            xDomain[0] = new Date(xDomain[0].getTime() - 86400000); // 1 day padding
            xDomain[1] = new Date(xDomain[1].getTime() + 86400000);
          }
          if (isNaN(xDomain[0].getTime()) || isNaN(xDomain[1].getTime()))
            return;
        }
        const x = d3.scaleTime().domain(xDomain).range([0, width]);

        const yMin = d3.min(plotData, (d) => d.price);
        const yMax = d3.max(plotData, (d) => d.price);
        if (
          yMin === undefined ||
          yMax === undefined ||
          isNaN(yMin) ||
          isNaN(yMax)
        )
          return;
        const yPadding = (yMax - yMin) * 0.1 || 1; // Add fallback padding if min=max
        const yDomainMin = yMin > 0 ? yMin - yPadding : 0;
        const yDomainMax = yMax + yPadding;
        const finalYDomain =
          yDomainMin === yDomainMax
            ? [yDomainMin - 1, yDomainMax + 1]
            : [yDomainMin, yDomainMax];
        const y = d3.scaleLinear().domain(finalYDomain).range([height, 0]);

        // --- SVG Container ---
        const svg = d3
          .select(chartRef.current)
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

        // --- Gradient Definition --- ADDED
        svg
          .append("defs")
          .append("linearGradient")
          .attr("id", "area-gradient")
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "0%")
          .attr("y2", "100%")
          .selectAll("stop")
          .data([
            { offset: "0%", color: lineColor, opacity: gradientOpacityStart }, // Start color/opacity
            { offset: "100%", color: lineColor, opacity: gradientOpacityEnd }, // End color/opacity
          ])
          .enter()
          .append("stop")
          .attr("offset", (d) => d.offset)
          .attr("stop-color", (d) => d.color)
          .attr("stop-opacity", (d) => d.opacity);

        // --- Area Generator --- ADDED
        const area = d3
          .area()
          .x((d) => x(d.date))
          .y0(height) // Bottom of the area is the bottom of the chart
          .y1((d) => y(d.price)) // Top of the area follows the price line
          .defined((d) => !isNaN(x(d.date)) && !isNaN(y(d.price)))
          .curve(d3.curveMonotoneX);

        // --- Append Area Path --- ADDED
        svg
          .append("path")
          .datum(plotData)
          .attr("fill", "url(#area-gradient)") // Use the gradient fill
          .attr("d", area);

        // --- Line Generator ---
        const line = d3
          .line()
          .x((d) => x(d.date))
          .y((d) => y(d.price))
          .defined((d) => !isNaN(x(d.date)) && !isNaN(y(d.price)))
          .curve(d3.curveMonotoneX);

        // --- Append Line Path --- (Drawn AFTER area)
        svg
          .append("path")
          .datum(plotData)
          .attr("fill", "none")
          .attr("stroke", lineColor)
          .attr("stroke-width", 2)
          .attr("d", line);

        // --- Tooltip Elements ---
        const focus = svg
          .append("g")
          .attr("class", "focus")
          .style("display", "none");

        focus
          .append("rect") /* ... tooltip background ... */
          .attr("class", "tooltip-bg")
          .attr("width", 110)
          .attr("height", 45)
          .attr("y", -60)
          .attr("rx", 6)
          .attr("fill", tooltipBgColor)
          .attr("opacity", 0.95)
          .attr("filter", "drop-shadow(0px 1px 3px rgba(0,0,0,0.15))");

        focus
          .append("text") /* ... tooltip price ... */
          .attr("class", "tooltip-price")
          .attr("y", -42)
          .attr("text-anchor", "middle")
          .attr("fill", textColor)
          .attr("font-size", "13px")
          .attr("font-weight", "bold");

        focus
          .append("text") /* ... tooltip date ... */
          .attr("class", "tooltip-date")
          .attr("y", -28)
          .attr("text-anchor", "middle")
          .attr("fill", textColor)
          .attr("font-size", "11px");

        focus
          .append("circle") /* ... tooltip circle ... */
          .attr("r", 5)
          .attr("fill", lineColor)
          .attr("stroke", bgColor)
          .attr("stroke-width", 2);

        focus
          .append("line") /* ... tooltip vertical line ... */
          .attr("class", "tooltip-line")
          .attr("y1", 0)
          .attr("stroke", lineColor)
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "3,3")
          .attr("opacity", 0.7);

        // --- Mouse Interaction ---
        svg
          .append("rect")
          .attr("class", "overlay")
          .attr("width", width)
          .attr("height", height)
          .style("fill", "none")
          .style("pointer-events", "all")
          .on("mouseover", () => {
            if (!isSinglePoint) focus.style("display", null);
          })
          .on("mouseout", () => {
            focus.style("display", "none");
            setHoveredPoint(null);
          })
          .on("mousemove", mousemove);

        const bisect = d3.bisector((d) => d.date).left;

        function mousemove(event) {
          if (isSinglePoint) return;
          const pointer = d3.pointer(event, this);
          const mouseX = pointer[0];
          if (mouseX < 0 || mouseX > width) {
            focus.style("display", "none");
            setHoveredPoint(null);
            return;
          }
          focus.style("display", null);

          const x0 = x.invert(mouseX);
          if (isNaN(x0.getTime())) return;

          const i = bisect(plotData, x0, 1);
          const d0 = plotData[i - 1];
          const d1 = plotData[i] || d0;
          const d = i > 0 && x0 - d0.date < d1.date - x0 ? d0 : d1;
          if (!d || isNaN(d.date.getTime()) || isNaN(d.price)) return;

          const focusX = x(d.date);
          const focusY = y(d.price);
          if (isNaN(focusX) || isNaN(focusY)) return;

          focus.attr("transform", `translate(${focusX},${focusY})`);
          focus
            .select(".tooltip-line")
            .attr("y1", 5)
            .attr("y2", height - focusY);
          focus.select(".tooltip-price").text(`$${d.price.toFixed(2)}`);
          focus
            .select(".tooltip-date")
            .text(d3.timeFormat("%b %d, %Y")(d.date));
          setHoveredPoint({ date: d.date, price: d.price });

          // Tooltip Edge Detection
          const tooltipWidth = 110;
          const halfTooltipWidth = tooltipWidth / 2;
          let tooltipX = -halfTooltipWidth;
          if (focusX < halfTooltipWidth + 5) tooltipX = -focusX + 5;
          else if (focusX > width - halfTooltipWidth - 5)
            tooltipX = width - focusX - tooltipWidth - 5;
          focus.select(".tooltip-bg").attr("x", tooltipX);
          focus.selectAll("text").attr("x", tooltipX + halfTooltipWidth);
        }
      } catch (error) {
        console.error("Error during D3 chart rendering:", error);
        d3.select(chartRef.current).selectAll("*").remove();
      }
    };

    renderChart();

    // --- Resize Handling ---
    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        d3.select(chartRef.current).selectAll("*").remove();
        if (
          filteredData &&
          filteredData.prices &&
          filteredData.prices.length > 0 &&
          chartRef.current
        ) {
          renderChart();
        }
      }, 150);
    };
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, [
    filteredData,
    activePeriod,
    bgColor,
    lineColor,
    textColor,
    tooltipBgColor,
    gradientOpacityStart,
    gradientOpacityEnd, // Add gradient opacities
  ]);

  // --- Event Handlers ---
  const handlePeriodChange = (period) => {
    setActivePeriod(period);
    setHoveredPoint(null);
  };

  // --- Loading/No Data State ---
  const showLoading = isLoading;
  const showNoData =
    !isLoading &&
    (!filteredData || !filteredData.prices || filteredData.prices.length === 0);

  // --- Component Return (JSX) ---
  return (
    <Box
      borderRadius="lg"
      bg={bgColor}
      boxShadow="md"
      p={6}
      width="100%"
      position="relative"
      overflow="hidden"
    >
      {/* Header */}
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="md" fontWeight="medium" color={textColor}>
          Performance
        </Text>
      </Flex>

      {/* Chart Area */}
      <Box
        ref={chartRef}
        height="300px"
        width="100%"
        mb={6}
        position="relative"
      >
        {/* Overlay */}
        {(showLoading || showNoData) && (
          <Flex
            position="absolute"
            inset="0"
            alignItems="center"
            justifyContent="center"
            bg={bgColor}
            zIndex={10}
            p={4}
          >
            {showLoading ? (
              <Skeleton height="90%" width="95%" borderRadius="md" />
            ) : (
              <Text color={textColor} textAlign="center">
                No data available for the selected period
                {symbol ? ` for ${symbol}` : ""}.
              </Text>
            )}
          </Flex>
        )}
      </Box>

      {/* Time Period Buttons */}
      <Flex wrap="wrap" gap={2} justifyContent="center">
        {["1W", "1M", "6M", "1Y", "5Y"].map((period) => (
          <Button
            key={period}
            size="sm"
            onClick={() => handlePeriodChange(period)}
            bg={activePeriod === period ? activeBg : buttonBg}
            color={activePeriod === period ? activeColor : buttonColor}
            borderRadius="full"
            px={4}
            fontWeight="medium"
            isDisabled={isLoading}
            _hover={
              activePeriod !== period && !isLoading
                ? { bg: useColorModeValue("gray.200", "gray.600") }
                : {}
            }
            _active={
              activePeriod === period
                ? { bg: activeBg }
                : { bg: useColorModeValue("gray.300", "gray.500") }
            }
            variant="solid"
            borderWidth={activePeriod !== period ? "1px" : "0px"}
            borderColor={useColorModeValue("gray.200", "gray.600")}
            minWidth="40px"
            opacity={isLoading ? 0.6 : 1}
            cursor={isLoading ? "not-allowed" : "pointer"}
          >
            {period}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default StockGraph;
