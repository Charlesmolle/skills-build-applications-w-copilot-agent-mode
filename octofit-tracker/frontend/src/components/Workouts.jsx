import CollectionPage from './CollectionPage'
import { fetchCollection as fetch } from '../api'

const endpoint = '/api/workouts/'

export default function Workouts() {
  return <CollectionPage loader={fetch} resource={endpoint.slice(5, -1)} title="Workouts" description="Find your next personalized workout." fields={[
    { key: 'name', label: 'Workout' },
    { key: 'difficulty', label: 'Difficulty' },
    { key: 'durationMinutes', label: 'Minutes' },
    { key: 'exercises', label: 'Exercises' },
  ]} />
}
