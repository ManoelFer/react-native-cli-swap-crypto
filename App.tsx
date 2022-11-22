import { SwapCrypto } from './src/screens';
import { SwapCryptoContextProvider } from '@/context'

import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <SwapCryptoContextProvider>
        <SwapCrypto />
      </SwapCryptoContextProvider>
      <Toast />
    </>

  );
};

export default App;
