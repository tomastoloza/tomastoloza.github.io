import React from 'react'
import ProfileLanding from '@/components/ProfileLanding'
import ProfileActions from '@/components/ProfileActions'
import Sections from './Sections'

const Profile = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-10 sm:py-16 space-y-10">
      <ProfileLanding />
      <ProfileActions />
      <Sections />
    </div>
  )
}

export default Profile
