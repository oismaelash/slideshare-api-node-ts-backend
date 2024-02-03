export type PresentationsResponse = {
    title: string
    pageUrl: string
    thumbnailUrl: string
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
