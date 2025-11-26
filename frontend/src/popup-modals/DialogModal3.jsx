import React from 'react'

function DialogModal3({ props }) {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box overflow-y-hidden p-0 h-130 w-130 rounded-full">
                    <img src={`${props}`} className='h-130 w-130 rounded-full'></img>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog >
        </div>
    )
}

export default DialogModal3
