import Chart from 'chart.js/auto';

const drawChart2 = (stockChart, canvasRef, myChart) => {
    const dates = Object.keys(stockChart);
    const prices = Object.values(stockChart);

    const chartData = {
        labels: dates,
        datasets: [
            {
                label: 'Closing Price',
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const ctx = canvasRef.current.getContext('2d');

    if (myChart.current) {
        myChart.current.destroy();
    }

    myChart.current = new Chart(ctx, {
        type: 'line',
        data: chartData,
    });

    return () => {
        myChart.current.destroy();
    };
};

export default drawChart2;