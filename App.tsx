import { SwapCrypto, SuccessTransaction, AboutSwap } from './src/screens';
import { SwapCryptoContextProvider } from '@/context'

import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <SwapCryptoContextProvider>
        <SwapCrypto />
        {/* <SuccessTransaction /> */}
        {/* <AboutSwap /> */}
      </SwapCryptoContextProvider>
      <Toast />
    </>

  );
};

export default App;
