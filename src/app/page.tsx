import type { Metadata } from 'next';
import Home from './pages/home/Home';
import { globalMetaData } from './utils/globalMetaDeta';

export const metadata : Metadata= globalMetaData;

export default function Page() {
 
  return (
    <>
      <Home />
    </>
  );
}
