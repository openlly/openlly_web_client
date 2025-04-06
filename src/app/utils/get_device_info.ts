import { UAParser } from 'ua-parser-js'

export type DeviceInfo = {
  device?: string
  deviceType?: string
  deviceModel?: string
  deviceVendor?: string
  deviceId?: string
  deviceToken?: string
  os?: string
  browser?: string
  ipAddress?: string
  userAgent?: string
  country?: string
  region?: string
  city?: string
  latitude?: number
  longitude?: number
  timezone?: string
  isp?: string
  org?: string
  asn?: string
  asnOrg?: string
  proxy?: boolean
  hosting?: boolean
  mobile?: boolean
}

// Get IP info (no caching, no storage)
async function getIpInfo(): Promise<Partial<DeviceInfo>> {
  try {
    
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()

    return {
      ipAddress: data.ip,
      country: data.country_name,
      region: data.region,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone,
      isp: data.org,
      org: data.org,
      asn: data.asn,
      proxy: false,         // Not provided in this API, default to false
      hosting: false,       // Not provided in this API, default to false
      mobile: false         // Not provided in this API, default to false
    }
  } catch (error) {
    console.error('Failed to fetch IP info:', error)
    return {}
  }
}


// Main function
export async function getDeviceInfo(): Promise<DeviceInfo> {
  const parser = new UAParser()
  const uaResult = parser.getResult()

  const deviceInfo: DeviceInfo = {
    device: `${uaResult.device.vendor || 'Unknown'} ${uaResult.device.model || 'Device'}`,
    deviceType: uaResult.device.type || 'desktop',
    deviceModel: uaResult.device.model,
    deviceVendor: uaResult.device.vendor,
    os: `${uaResult.os.name || 'Unknown'} ${uaResult.os.version || ''}`.trim(),
    browser: uaResult.browser.name,
  }

  if (typeof window !== 'undefined') {
    deviceInfo.userAgent = navigator.userAgent
    deviceInfo.deviceId = `device-${Math.random().toString(36).substring(2, 10)}`
    deviceInfo.deviceToken = `token_${Math.random().toString(36).substring(2, 10)}`

    const ipInfo = await getIpInfo()
    //update mobile info
    const isMobile = isMobileUserAgent(navigator.userAgent)
    deviceInfo.mobile = isMobile
    Object.assign(deviceInfo, ipInfo)
  }

  return deviceInfo
}
export function isMobileUserAgent(userAgent: string): boolean {
  const parser = new UAParser(userAgent)
  const deviceType = parser.getDevice().type
  return deviceType === 'mobile' || deviceType === 'tablet'
}