import React, { useState } from 'react'
import { Form, redirect } from 'react-router-dom'
import { createEvent } from '../apiUtils'
import { useAuth } from '../hooks/useAuth'


export const action = async (request) => {
    return redirect('/Events')
}

const CreateEvent = () => {

    const [form, setForm] = useState({
        name: 'test',
        description: 'test',
        date: '2019-12-12',
        time: '10:00',
        location: 'hanoi, vietnam',
        imagePath: ''
        
    })

    const { authToken } = useAuth()
    const handleCreateEvent = async () => {
        const config = {
            headers : {
              'Authorization': `Token ${authToken}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        await createEvent(form, config)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
          [e.target.id]: e.target.value
        })
      };
    
    const handleImageChange = (e) => {
        setForm({
            ...form,
          imagePath: e.target.files[0]
        })
      };

  return (
    <div className='min-h-[100vh] flex justify-center'>
        <div className='w-4/12 mt-16'>
        <Form encType="multipart/form-data" method="post" id='login-form' className='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full mt-5  border-2 items-center'>
            <h2 className='text-font font-semibold text-green-800'>Create Event</h2>
            <div class="mb-4 py-5">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Name</label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                    value={form.name}
                    onChange={(e) => handleChange} id="name" type='text'  placeholder="Name" name='Name' />
            </div>
            <div>
                <label className='font-bold text-gray-700 text-sm' for="password">Description</label>
                <textarea 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                    value={form.description}
                    onChange={(e) => handleChange}     
                    id="description" 
                    type='text' 
                    placeholder="Come and visit..." 
                    name='description'/>
            </div>
            <div class="mb-4 py-5 flex space-x-5">
                <div className='w-1/2'>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="date">Date</label>
                    <input 
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                        value={form.date}
                        onChange={handleChange} id="name" type='date'  placeholder="Name" name='Name' />
                </div>
                <div className='w-1/2'>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="time">Time</label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                    onChange={handleChange} 
                    id="time" 
                    type='time' 
                    name='time' 
                    value={form.time}/>
                </div>
            </div>
                <div class="mb-4 py-5">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Location</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                    onChange={handleChange} 
                    id="location" 
                    type='text' 
                    placeholder="Hanoi, Vietnam" 
                    name='location'
                    value={form.location} />
                </div>
                <div class="mb-4 py-5">
                
                <label class="block text-gray-700 text-sm font-bold mb-2" for="imagePath">Image</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                    onChange={handleImageChange} 
                    id="imagePath" 
                    type='file' 
                    name='imagePath'
                    accept="image/jpeg,image/png,image/gif"
                     />
                </div>

                    <button onClick={() => handleCreateEvent()}class="mt-10 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-xl w-full" type='submit'>
                    Create Event
                </button>
        </Form>
        </div>
    </div>
  )
}

export default CreateEvent
