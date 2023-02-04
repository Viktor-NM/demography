import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import data_json from '../assets/Data.json'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
}

export default function ChartItem({ option }) {
	const cssData = {
		labels: data_json.css[option].map(({ id }) => id),
		datasets: [
			{
				label: 'Dataset 1',
				data: data_json.css[option].map(({ count }) => count),
				backgroundColor: '#38d6fe',
			},
		],
	}

	const jsData = {
		labels: data_json.js[option].map(({ id }) => id),
		datasets: [
			{
				label: 'Dataset 1',
				data: data_json.js[option].map(({ count }) => count),
				backgroundColor: '#51f2cb',
			},
		],
	}

	return (
		<section className='px:64 mb:64 gap:32 grid grid-cols:2 flex:1 pc:center {flex;flex-direction:col;jc:center;ai:center}>article'>
			<article>
				<h3>
					State of CSS 2022 -{' '}
					{data_json.css[option].map((a) => a.count).reduce((a, b) => a + b, 0)}{' '}
					Resultados
				</h3>
				<Bar options={options} data={cssData} />
			</article>
			<article>
				<h3>
					State of JS 2022 -{' '}
					{data_json.js[option].map((a) => a.count).reduce((a, b) => a + b, 0)} Resultados
				</h3>
				<Bar options={options} data={jsData} />
			</article>
		</section>
	)
}
