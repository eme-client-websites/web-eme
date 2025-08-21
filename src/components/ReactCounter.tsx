import { useState } from 'react';

export default function ReactCounter() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg-white p-6 rounded-xl shadow-lg">
			<h2 className="text-2xl font-bold text-gray-800 mb-4">
				Componente React
			</h2>
			<p className="text-gray-600 mb-4">
				Contador: <span className="font-bold text-blue-600">{count}</span>
			</p>
			<div className="space-x-3">
				<button
					onClick={() => setCount(count - 1)}
					className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
				>
					Decrementar
				</button>
				<button
					onClick={() => setCount(count + 1)}
					className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
				>
					Incrementar
				</button>
				<button
					onClick={() => setCount(0)}
					className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
				>
					Resetear
				</button>
			</div>
		</div>
	);
}
