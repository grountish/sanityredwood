import { render } from '@redwoodjs/testing'

import MusicForecastPage from './MusicForecastPage'

describe('MusicForecastPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MusicForecastPage />)
    }).not.toThrow()
  })
})
