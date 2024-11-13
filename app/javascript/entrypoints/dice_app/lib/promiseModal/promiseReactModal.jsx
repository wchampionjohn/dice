import React from 'react'
import { createRoot } from 'react-dom/client'

import PromiseModal from './PromiseModal'

const unsetPromiseModal = (wrapper) => {
  setTimeout(() => {
    const portal = document.querySelector('.ReactModalPortal')
    if (portal !== null) portal.remove()

    wrapper.remove()
  }, 300)
}

const findOrCreateWrapper = (identifyID, mountRoot = document.body) => {
  let wrapper = document.getElementById(identifyID)
  if (wrapper === null) {
    wrapper = mountRoot.appendChild(document.createElement('div'))
    wrapper.id = identifyID
  }
  return wrapper
}

const promisableModal = (Component, props = {}, mountRoot = document.body) => {
  const wrapper = findOrCreateWrapper(
    `promise-modal-wrapper-${Date.now()}`,
    mountRoot
  )

  const promise = new Promise((resolve, reject) => {
    const container = createRoot(wrapper)
    container.render(
      <PromiseModal resolve={resolve}>
        {({ open, setOpen, onConfirm, onCancel }) => (
          <Component
            {...props}
            open={open} // boolean: [true, false]
            setOpen={setOpen} // function: set `open` state
            onConfirm={onConfirm} // function: (result) => {}
            onCancel={onCancel} // function: (result) => {}
            resolve={resolve} // handle result by external
            reject={reject} // handle exception by external
            wrapper={wrapper}
          />
        )}
      </PromiseModal>
    )
  })

  return promise.then(
    (result) => {
      unsetPromiseModal(wrapper)
      return result
    },
    (result) => {
      unsetPromiseModal(wrapper)
      return Promise.reject(result)
    }
  )
}

export default promisableModal
