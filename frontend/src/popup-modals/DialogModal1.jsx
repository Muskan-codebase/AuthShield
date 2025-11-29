import React from 'react'

function DialogModal1({ props, updateFile, updateName, updateBio, editName, bio }) {

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={props} className='space-y-2'>
                        <h3 className="font-bold text-2xl text-center">Edit your Profile</h3>
                        <br></br>
                        <label className='text-lg'>Photo</label><br></br>
                        <input type="file" onChange={updateFile} className="input w-full text-lg" />
                        <br></br>
                        <label className='text-lg'>Name</label><br></br>
                        <input type="text" onChange={updateName} value={editName} placeholder="fullname" className="input w-full text-lg" />
                        <br></br>
                        <label className='text-lg'>Bio</label><br></br>
                        <textarea className="textarea input w-full" onChange={updateBio} value={bio} placeholder="Bio"></textarea>
                        <br></br>
                        <button type='submit' className='bg-blue-600 w-full text-white text-lg rounded mt-4 p-2 hover:bg-blue-500 cursor-pointer'>Edit</button>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default DialogModal1
