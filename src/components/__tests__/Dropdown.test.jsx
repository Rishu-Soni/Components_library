import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Dropdown } from '../Dropdown'

describe('Dropdown component', () => {
  const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ]

  it('renders placeholder when no value is provided', () => {
    render(<Dropdown options={options} placeholder="Choose an item" />)
    expect(screen.getByText('Choose an item')).toBeInTheDocument()
  })

  it('renders selected option label when value is provided', () => {
    render(<Dropdown options={options} value="b" />)
    expect(screen.getByText('Option B')).toBeInTheDocument()
  })

  it('toggles options menu on button click', () => {
    render(<Dropdown options={options} placeholder="Choose an item" />)
    expect(screen.queryByText('Option A')).not.toBeInTheDocument()

    const trigger = screen.getByRole('button')
    fireEvent.click(trigger)
    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()
    expect(screen.getByText('Option C')).toBeInTheDocument()
  })

  it('calls onChange and closes options menu when an option is clicked', () => {
    const handleChange = vi.fn()
    render(<Dropdown options={options} onChange={handleChange} placeholder="Choose an item" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByText('Option A'))

    expect(handleChange).toHaveBeenCalledWith('a')
    expect(screen.queryByText('Option B')).not.toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', () => {
    render(
      <div>
        <Dropdown options={options} placeholder="Choose an item" />
        <button type="button">Outside element</button>
      </div>
    )

    fireEvent.click(screen.getByText('Choose an item'))
    expect(screen.getByText('Option A')).toBeInTheDocument()

    fireEvent.mouseDown(screen.getByText('Outside element'))
    expect(screen.queryByText('Option A')).not.toBeInTheDocument()
  })
})
