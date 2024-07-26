import Chart from 'chart.js/auto'
import { useEffect, useRef } from 'react'
import { useAppSelector } from '../../../features/hook'
import { growthDatasets } from './growthDatasets'

const GrowthChart = () => {
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const calculator = useAppSelector(store => store.calculator);
	useEffect(() => {
		if (!canvasRef.current) return;
		const ctx = canvasRef.current;
		const chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: new Array(calculator.months).fill(null).map((_, i) => `${i}`),
				datasets: growthDatasets(calculator),
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
	return <canvas ref={canvasRef} id='growth-chart'></canvas>;
}

export default GrowthChart