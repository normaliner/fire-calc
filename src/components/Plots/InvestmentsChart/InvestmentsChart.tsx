import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../../features/hook';
import { investmentsDatasets } from './investmentsDatasets';

const InvestmentsChart = () => {
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const calculator = useAppSelector(store => store.calculator);
	useEffect(() => {
		if (!canvasRef.current) return;
		const ctx = canvasRef.current;
		const chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: new Array(calculator.months).fill(null).map((_, i) => `${i}`),
				datasets: investmentsDatasets(calculator),
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
		return () => chart.destroy();
	}, [calculator]);
	return <canvas ref={canvasRef} id='investments-chart'></canvas>;
};

export default InvestmentsChart;
