"use client"
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import AuthForm from '../components/authForm'

export default function Home() {

  const supabase = createClientComponentClient()
  const [profiles, setProfiles] = useState([])

  const getProfiles = useCallback(async () => {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url, socials,buildspace_alumni`)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
      console.log(data)
      setProfiles(data)
      }
    } catch (error) {
      console.log(error)
      alert('Error loading user data!')
    } finally {
      // setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    getProfiles()
  }, [getProfiles])

  return (
    <div className="container mt-10">
      <h1 className='fs-1'>Hire a Builder</h1>
      {profiles.map((profile, i) => (
        <div className='bg-gray-900 p-10'>
          <h2 className='fs-3'>{profile.full_name}</h2>
          
        </div>
      ))}
      
    </div>
  )
}