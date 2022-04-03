declare global {
  let browser: any;
}

export async function getURLOfCurrentTab(): Promise<URL | null> {
  const activeTabs: any[] = await browser.tabs.query({currentWindow: true, active: true});
  return activeTabs.length > 0 ? new URL(activeTabs[0].url) : null
}

export function addTabActivatedListener(listener: (activeInfo: any) => void) {
  browser.tabs.onActivated.addListener(listener);
}

export function removeTabActivatedListener(listener: (activeInfo: any) => void) {
  browser.tabs.onActivated.removeListener(listener);
}