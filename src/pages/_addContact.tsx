import { useState } from 'react'
import axios from 'axios'

function CreateUserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    try {
        const response = await axios.post('/api/createUser', {
          name,
          email,
        })
        alert('Utente aggiunto con successo!');

        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={'w-full h-screen justify-center items-center flex'}>
        <div className='flex flex-col'>
          <h1 className={'text-xl mb-4'}>Sing up</h1>
          <input className={'rounded-xl border h-10 px-4'} placeholder="Utente" type="text" value={name} onChange={(event) => setName(event.target.value)} required />
          <input className={'rounded-xl my-3 border h-10 px-4'} placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
          <button type="submit" className={'rounded-full px-3 py-2 border hover:bg-slate-200 w-fit'}>Create User</button>
        </div>
      </div>
    </form>
  )
}

export default CreateUserForm
