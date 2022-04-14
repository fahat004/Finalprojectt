import React from 'react'
import Button from '../components/Button'
import { useDocumentTitle } from '../config/customHooks'

export default function NotFound() {
  useDocumentTitle('Not Found - Spotify')
  return (
    <main className="center">
      Not Found Page...
      <Button href="/create-playlist">Go To Content</Button>
    </main>
  )
}