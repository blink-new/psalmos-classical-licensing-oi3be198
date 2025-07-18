import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'psalmos-classical-licensing-oi3be198',
  authRequired: true
})

// Disable analytics temporarily to avoid 504 errors
if (blink.analytics && blink.analytics.disable) {
  blink.analytics.disable()
}