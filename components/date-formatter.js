import { parseISO, format } from 'date-fns'

export const dateCool = (date) =>
  new Date(date).toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export default function DateFormatter({ dateString }) {
  return <time dateTime={new Date(dateString)}>{dateCool(dateString)}</time>
}
