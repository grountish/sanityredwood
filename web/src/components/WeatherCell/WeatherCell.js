export const QUERY = gql`
  query($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <span
    style={{
      backgroundColor: '#ffdfdf',
      color: '#990000',
      padding: '0.5rem',
      display: 'inline-block',
    }}
  >
    {error.message.replace('GraphQL error: ', '')}
  </span>
)

export const Success = ({ weather }) => {
  return (
    <section className="fade-in">
      <h1 className="weather-cell-headers text-7xl">
        It's {weather.temp} ºC in {weather.city} and it's a day with{' '}
        {weather.conditions}
      </h1>
      <h1 className="weather-cell-subtitle text-3xl">
        Here's a playlist for you today
      </h1>
      {weather.conditions == 'clear' ? (
        <iframe
          src="https://open.spotify.com/embed/playlist/5737dPN0TW9dH7GvXTf7lv?theme=0"
          title="summer"
          width="50%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      ) : (
        <h1>caso 2</h1>
      )}
    </section>
  )
}
