import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function formatValue(value) {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export default function CollectionPage({ resource, title, description, fields, loader = fetchCollection }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    loader(resource)
      .then((data) => active && setItems(data))
      .catch((requestError) => active && setError(requestError.message))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [loader, resource])

  return (
    <section>
      <div className="mb-4">
        <p className="text-uppercase text-primary fw-semibold small mb-1">Octofit Tracker</p>
        <h1 className="display-5 fw-bold mb-2">{title}</h1>
        <p className="text-secondary mb-0">{description}</p>
      </div>
      {loading && <div className="alert alert-light border">Loading {title.toLowerCase()}...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>{fields.map((field) => <th key={field.key}>{field.label}</th>)}</tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr><td colSpan={fields.length} className="text-center text-secondary py-4">No records found.</td></tr>
                ) : items.map((item) => (
                  <tr key={item._id || item.id || JSON.stringify(item)}>
                    {fields.map((field) => <td key={field.key}>{formatValue(item[field.key])}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}
