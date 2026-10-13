import CollectionPage from './CollectionPage'
import { fetchCollection as fetch } from '../api'

const endpoint = '/api/activities/'

export default function Activities() {
  return <CollectionPage loader={fetch} resource={endpoint.slice(5, -1)} title="Activities" description="Track completed workouts and progress." fields={[
    { key: 'type', label: 'Activity' },
    { key: 'durationMinutes', label: 'Minutes' },
    { key: 'calories', label: 'Calories' },
    { key: 'completedAt', label: 'Completed' },
  ]} />
}
