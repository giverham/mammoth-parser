export type UserRole =
  | 'member'
  | 'verified_member'
  | 'moderator'
  | 'administrator'
  | 'super_administrator'

export type UserStatus = 'active' | 'offline' | 'busy'

export interface Profile {
  id: string
  full_name: string | null
  username: string | null
  email: string | null
  phone: string | null
  bio: string | null
  location: string | null
  gender: string | null
  interests: string[]
  avatar_url: string | null
  cover_url: string | null
  email_verified: boolean
  phone_verified: boolean
  verified: boolean
  role: UserRole
  status: UserStatus
  status_visibility: boolean
  date_registered: string
  last_name_change: string | null
  last_username_change: string | null
  created_at: string
  updated_at: string
}

export interface PlatformSettings {
  id: boolean
  platform_name: string
  support_email: string
  max_profile_photos: number
  max_post_photos: number
  max_community_images_per_day: number
  max_message_photos_per_month: number
  maintenance_mode: boolean
  updated_at: string
}

export const ROLE_LABELS: Record<UserRole, string> = {
  member: 'Member',
  verified_member: 'Verified Member',
  moderator: 'Moderator',
  administrator: 'Administrator',
  super_administrator: 'Super Administrator',
}

export const INTEREST_OPTIONS = [
  'Volunteering',
  'Mentorship',
  'Community Events',
  'Fundraising',
  'Education',
  'Environment',
  'Health & Wellness',
  'Arts & Culture',
  'Technology',
  'Faith & Spirituality',
  'Local Business',
  'Family & Parenting',
] as const

export const GENDER_OPTIONS = [
  'Female',
  'Male',
  'Non-binary',
  'Prefer not to say',
] as const
