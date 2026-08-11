import React from 'react'

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 text-2xl font-semibold leading-none ml-auto focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
