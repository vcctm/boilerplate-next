const APP_KEY = 'BOILERPLATE'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return;
  const data = localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string) {
  if (typeof window === 'undefined') return;
  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}