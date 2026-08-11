import React, { useState } from 'react'
import { Button, Modal, Dropdown } from './components'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const dropdownOptions = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Component Library</h1>
          <p className="text-gray-600">Starter component set for React applications.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="sm">Primary Small</Button>
            <Button variant="primary" size="md">Primary Medium</Button>
            <Button variant="primary" size="lg">Primary Large</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Dropdown</h2>
          <div>
            <Dropdown
              options={dropdownOptions}
              value={selectedOption}
              onChange={(val) => setSelectedOption(val)}
              placeholder="Select an option"
            />
            {selectedOption && (
              <p className="mt-2 text-sm text-gray-600">Selected: {selectedOption}</p>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Modal</h2>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
          >
            <p className="text-gray-600">This is a modal dialog window.</p>
            <div className="mt-4 flex justify-end">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
            </div>
          </Modal>
        </section>
      </div>
    </div>
  )
}

export default App
