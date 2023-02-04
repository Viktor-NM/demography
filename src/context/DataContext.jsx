import { createContext, useContext, useState } from 'react'
import ChartItem from '../components/ChartItem'

const DataContext = createContext({})

export const useData = () => useContext(DataContext)

const topics = [
	{ nombre: 'Región', range: 0 },
	{ nombre: 'Lenguaje', range: 100 },
	{ nombre: 'Edad', range: 200 },
	{ nombre: 'Experiencia', range: 300 },
	{ nombre: 'Estudios', range: 400 },
	{ nombre: 'Sueldo', range: 500 },
	{ nombre: 'Fuente', range: 600 },
	{ nombre: 'Género', range: 700 },
	{ nombre: 'Raza y Etnia', range: 800 },
	{ nombre: 'Discapacidades', range: 900 },
]

export default function DataProvider({ children }) {
	const [option, setOption] = useState(topics[0])

	const topicsCharts = {
		Región: <ChartItem option='country' />,
		Lenguaje: <ChartItem option='language' />,
		Edad: <ChartItem option='age' />,
		Experiencia: <ChartItem option='experience' />,
		Estudios: <ChartItem option='education' />,
		Sueldo: <ChartItem option='salary' />,
		Fuente: <ChartItem option='source' />,
		Género: <ChartItem option='genre' />,
		'Raza y Etnia': <ChartItem option='race' />,
		Discapacidades: <ChartItem option='disability' />,
	}

	return (
		<DataContext.Provider value={{ setOption, option, topics, topicsCharts }}>
			{children}
		</DataContext.Provider>
	)
}
