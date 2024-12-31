export function isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  
  export function isIOS(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  
  export function checkAppInstalled(iosBundle: string, androidBundle: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (!isMobileDevice()) {
        resolve(false);
        return;
      }
  
      const bundle = isIOS() ? iosBundle : androidBundle;
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
  
      const timeoutId = setTimeout(() => {
        document.body.removeChild(iframe);
        resolve(false);
      }, 2000);
  
      iframe.onload = () => {
        clearTimeout(timeoutId);
        document.body.removeChild(iframe);
        resolve(true);
      };
  
      iframe.src = isIOS() 
        ? `${bundle}://` 
        : `intent://#Intent;package=${bundle};end`;
    });
  }