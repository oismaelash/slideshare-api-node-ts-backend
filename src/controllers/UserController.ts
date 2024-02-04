/* eslint-disable no-unused-vars */
import puppeteer from 'puppeteer'
import { UserResponse } from '../types'
import { SLIDESHARE_URL } from '../utils/constants'

export async function getUser (username: string): Promise<UserResponse> {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  const URL = `${SLIDESHARE_URL}/${username}`
  await page.goto(URL, {
    waitUntil: 'load',
    timeout: 0
  })

  const title = await (
      await page.$('meta[property="slideshare:name')
    )?.evaluate((e) => e.content)

  const url = await (
      await page.$('meta[property="og:url')
    )?.evaluate((e) => e.content)

  const imageUrlData = await (
      await page.$('meta[property="og:image')
    )?.evaluate((e) => e.content)
  const imageUrl = imageUrlData.replace('http:', '')

  const uploadCount = await (
      await page.$('meta[property="slideshare:upload_count')
    )?.evaluate((e) => e.content)

  const presentationsUrl = `${SLIDESHARE_URL}/${username}/presentations`

  const followersCount = await (
      await page.$('meta[property="slideshare:followers')
    )?.evaluate((e) => e.content)

  const followingCount = await (
      await page.$('meta[property="slideshare:following')
    )?.evaluate((e) => e.content)

  const joinedAt = await (
      await page.$('meta[property="slideshare:joined_on')
    )?.evaluate((e) => e.content)

  const updatedAt = await (
      await page.$('meta[property="slideshare:updated_at')
    )?.evaluate((e) => e.content)

  const elementTags = await page.$$('.tag-capsule')
  const tags = []
  for (const tag of elementTags) {
    const tagData = await tag?.evaluate(e => e.textContent)
    tags.push(tagData)
  }

  const organization = await (
      await page.$('meta[property="slideshare:organization')
    )?.evaluate((e) => e.content)

  const occupation = await (
      await page.$('meta[property="slideshare:work')
    )?.evaluate((e) => e.content)

  const about = await (
      await page.$('meta[property="og:description')
    )?.evaluate((e) => e.content)

  const twitter = await (
    await page.$('.twitter')
  )?.evaluate((e) => e.href)

  const facebook = await (
      await page.$('.facebook')
    )?.evaluate((e) => e.href)

  const linkedin = await (
      await page.$('.linkedin')
    )?.evaluate((e) => e.href)

  const sections = await page.$$('.section-container') || []
  let industry
  let website
  let city
  let region
  let country

  for (const section of sections) {
    const textContent = await section?.evaluate(e => e.textContent)
    if (textContent.includes('Industry')) {
      industry = await section?.evaluate(e => e.children[1].textContent.trim())
    }

    if (textContent.includes('Website')) {
      website = await section?.evaluate(e => e.children[1].href)
    }

    if (textContent.includes('Organization / Workplace')) {
      city = await section?.evaluate(e => e.children[1].textContent.trim().split(' ')[0].slice(0, -1))
    }

    if (textContent.includes('Organization / Workplace')) {
      region = await section?.evaluate(e => e.children[1].textContent.trim().split(' ')[1])
    }

    if (textContent.includes('Organization / Workplace')) {
      country = await section?.evaluate(e => e.children[1].textContent.trim().split(' ')[2])
    }
  }

  browser.close()

  const response: UserResponse = {
    contactDetails: {
      city,
      country,
      facebook,
      linkedin,
      region,
      twitter
    },
    followersCount,
    followingCount,
    imageUrl,
    joinedAt,
    personalInformation: {
      about,
      industry,
      occupation,
      organization,
      website
    },
    presentationsUrl,
    tags,
    title,
    updatedAt,
    uploadCount,
    url
  }

  return response
}
