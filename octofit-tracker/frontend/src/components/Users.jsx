import CollectionPage from './CollectionPage'
import { fetchCollection as fetch } from '../api'

const endpoint = '/api/users/'

export default function Users() {
  return <CollectionPage loader={fetch} resource={endpoint.slice(5, -1)} title="Users" description="Manage the Octofit community." fields={[
    { key: 'displayName', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
  ]} />
}
