export interface User {
  id: string
  email: string
  displayName?: string
  avatar?: string
}

export interface License {
  id: string
  userId: string
  trackId: string
  trackTitle: string
  composer: string
  performer: string
  label: string
  licenseType: 'standard' | 'extended' | 'commercial'
  downloadUrl: string
  createdAt: string
  expiresAt?: string
  usageRights: string[]
}

export interface Track {
  id: string
  title: string
  composer: string
  performer: string
  label: string
  duration: number
  genre: string
  era: string
  instruments: string[]
  audioUrl: string
  coverUrl?: string
  description?: string
}

export type AppView = 'home' | 'dashboard' | 'settings' | 'billing' | 'browse' | 'pricing' | 'labels' | 'about'