'use client'

import {useState} from 'react'
import {supabase} from '../supabaseClient'

export default function GostiPage(){
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [email, setEmail] = useState('')
    const [brojOsoba, setBrojOsoba] = useState<number>(1)
    const [telefon, setTelefon] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()  
        setLoading(true)

        try{
            const { error } = await supabase
                .from('gosti')
                .insert([
                    {
                    ime,
                    prezime,
                    email,
                    broj_osoba: brojOsoba,
                    telefon
                    },
                ])
        if (error) throw error
        
        alert('Hvala! Vas dolazak je potvrdjen')
        setIme('')
        setPrezime('')
        setEmail('')
        setBrojOsoba(1)
        setTelefon('')       
        } catch (error: any) {
            console.log('Greška:', error)
            alert('Greška: ' + (error?.message || JSON.stringify(error)))
        }finally {
            setLoading(false)
        }
    }

    return (
        <main className='p-8 max-w-md mx-auto'>
            <h1 className='text-2xl font-bold mb-6'>Pozivnica - Potvrdi dolazak</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
          type="text"
          placeholder="Ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Prezime"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Broj osoba"
          value={brojOsoba}
          onChange={(e) => setBrojOsoba(Number(e.target.value))}
          min="1"
          className="border p-2 rounded"
        />

        <input
          type="tel"
          placeholder="Telefon (opciono)"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Slanje...' : 'Potvrdi dolazak'}
        </button>
            </form>

        </main>
    )
}