import puppeteer from 'puppeteer'
// eslint-disable-next-line no-unused-vars
import { PresentationData, PresentationsResponse as PresentationResponse } from 'src/types'

export async function getAll (username: string): Promise<PresentationResponse> {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox']
    })
    const page = await browser.newPage()
    let paginationIndex = 1
    let hasContent = true
    const presentationsData: PresentationData[] = []

    while (hasContent) {
      const URL = `https://www.slideshare.net/${username}/presentations/${paginationIndex}`
      console.log(URL)
      await page.goto(URL, {
        waitUntil: 'load',
        timeout: 0
      })

      const presentationsElements = await page.$$('.slideshow-card')
      console.log(presentationsElements.length)
      if (presentationsElements.length > 0) {
        for (const presentationElement of presentationsElements) {
          const title = await (
            await presentationElement.$('h3')
          ).evaluate((e) => e.textContent)

          const pageUrl = await (
            await (await presentationElement.$('h3')).$('a')
          ).evaluate((e) => e.href)

          const thumbnailUrl = (
            await (
              await presentationElement.$('.thumb')
            ).evaluate((e) => e.style.backgroundImage)
          ).match(/url\("([^"]+)"\)/)[1]

          const presentation: PresentationData = {
            title,
            pageUrl,
            thumbnailUrl
          }

          presentationsData.push(presentation)
        }
      } else {
        hasContent = false
      }

      paginationIndex++
    }

    browser.close()

    const response: PresentationResponse = {
      data: presentationsData,
      count: presentationsData.length
    }

    return response
  } catch (error) {
    console.error(error)

    const response: PresentationResponse = {
      error: error
    }

    return response
  }
}

// export async function getOne (url: string): Promise<PresentationData> {
//   return {}
// }
