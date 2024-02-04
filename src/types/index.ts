export type PresentationsResponse = {
    data?: Array<PresentationData> | PresentationData
    error?: any
    count?: number
}

export type PresentationData = {
    title: string
    pageUrl: string
    thumbnailUrl: string
    userUrl: string
    description?: string
    categories?: Array<string>
    createdAt?: string
    likeCount?: number
    viewsCount?: number
    slides?: Array<string>
}

export type PersonalInformation = {
    organization: string
    occupation: string
    industry: string
    website: string
    about: string
}

export type ContactDetails = {
    twitter: string
    facebook: string
    linkedin: string
    city: string
    region: string
    country: string
}

export type UserResponse = {
    title: string
    url: string
    imageUrl: string
    description: string
    uploadCount: number
    presentationsUrl: string
    followersCount: number
    followingCount: number
    joinedAt: number
    updatedAt: number
    personalInformation: PersonalInformation
    contactDetails: ContactDetails
    tags: Array<string>
}
