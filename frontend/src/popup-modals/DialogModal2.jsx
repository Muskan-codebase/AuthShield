import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";

function DialogModal2({ props }) {

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className="font-bold text-3xl text-center text-red-600">Delete Account</h1>
                    <div className='flex items-center justify-center p-2'>
                        <RiErrorWarningLine className='text-7xl text-red-600' />
                    </div>
                    <p className="text-center text-lg">
                        <span className='font-semibold text-2xl'>Are you sure you want to delete your account?</span><br></br>
                        This action is permanent and cannot be undone.</p>
                    <button onClick={props} className='w-full bg-red-600 text-white text-lg text-center p-2 mt-5 rounded-md hover:bg-red-500 cursor-pointer active:bg-red-700'>Delete my account</button>
                </div>
            </dialog>
        </div>
    )
}

export default DialogModal2
