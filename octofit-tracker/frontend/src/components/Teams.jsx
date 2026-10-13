import CollectionPage from './CollectionPage'
import { fetchCollection as fetch } from '../api'

const endpoint = '/api/teams/'

export default function Teams() {
  return <CollectionPage loader={fetch} resource={endpoint.slice(5, -1)} title="Teams" description="Connect with teammates and reach goals together." fields={[
    { key: 'name', label: 'Team' },
    { key: 'description', label: 'Description' },
    { key: 'members', label: 'Members' },
  ]} />
}
