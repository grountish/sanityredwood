import { render } from '@redwoodjs/testing'

import Marquee from './Marquee'

describe('Marquee', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Marquee />)
    }).not.toThrow()
  })
})
