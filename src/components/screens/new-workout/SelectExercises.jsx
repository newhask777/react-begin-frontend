import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import Loader from '../../ui/Loader'

import { useListExercises } from './useListExercises'

const SelectExercises = ({ control }) => {
		const { data, isLoading, error } = useListExercises() // 👈 Default empty array
	
		// ... rest of component
		console.log(data)

	if (isLoading) return <Loader />

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => {
				console.log(value)
				return (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={data.map(exercise => ({
							value: exercise.id,
							label: exercise.name
						}))}
						value={value}
						onChange={onChange}
						isMulti
					/>
				)
			}}
		/>
	)
}

export default SelectExercises
