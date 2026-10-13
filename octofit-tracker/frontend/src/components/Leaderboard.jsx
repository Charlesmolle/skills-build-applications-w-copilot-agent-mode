import CollectionPage from './CollectionPage'
import { fetchCollection as fetch } from '../api'

const endpoint = '/api/leaderboard/'

export default function Leaderboard() {
  return <CollectionPage loader={fetch} resource={endpoint.slice(5, -1)} title="Leaderboard" description="See how your team is performing." fields={[
    { key: 'rank', label: 'Rank' },
    { key: 'user', label: 'User' },
    { key: 'points', label: 'Points' },
  ]} />
}
