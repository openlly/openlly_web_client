import  { useEffect, useState } from 'react';
import { Smartphone } from 'lucide-react';
import { checkAppInstalled, isIOS, isMobileDevice } from '../../utils/plateform';
import { AppButton } from './buttons/AppButton';
import { StoreButton } from './buttons/StoreButton';

interface AppRedirectProps {
  token: string;
  email: string
}

export function AppRedirect({ token,email }: AppRedirectProps) {
  const [isAppInstalled, setIsAppInstalled] = useState<boolean | null>(null);
  const iosBundle = 'com.smkwinner.openlly.openlly';
  const androidBundle = 'com.smkwinner.openlly.client';
  const appUrl = `openlly://auth?token=${token}&email=${email}`;

  useEffect(() => {
    const checkApp = async () => {
      const installed = await checkAppInstalled(iosBundle, androidBundle);
      setIsAppInstalled(installed);
      
      if (installed) {
        window.location.href = appUrl;
      }
    };``

    checkApp();
  }, [token, appUrl]);

  const handleOpenApp = () => {
    window.location.href = appUrl;
  };

  if (isAppInstalled === null) {
    return (
      <div className="flex items-center justify-center space-x-2 text-white/80">
        <span>Checking app installation...</span>
      </div>
    );
  }

  const storeUrl = isIOS() 
    ? 'https://apps.apple.com/app/your-ios-app-id'
    : 'https://play.google.com/store/apps/details?id=com.smkwinner.openlly.client';

  return (
    <div className="text-center space-y-6">
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block">
        <Smartphone className="w-12 h-12 text-white" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-white">
          {isAppInstalled ? 'Opening Openlly App...' : 'Get the Openlly App'}
        </h2>
        {isAppInstalled && (
          <p className="text-white/80 text-sm">
            If the app doesn't open automatically, click the button below
          </p>
        )}
      </div>

      <div className="space-y-3">
        {isMobileDevice() && (
          <AppButton 
            onClick={handleOpenApp}
            label="Open App"
          />
        )}
        {!isAppInstalled && (
          <StoreButton storeUrl={storeUrl} />
        )}
      </div>
    </div>
  );
}