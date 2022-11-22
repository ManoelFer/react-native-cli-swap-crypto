import { SwapCrypto, SuccessTransaction } from './src/screens';
import { SwapCryptoContextProvider } from '@/context'

import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <SwapCryptoContextProvider>
        {/* <SwapCrypto /> */}
        <SuccessTransaction />
      </SwapCryptoContextProvider>
      <Toast />
    </>

  );
};

export default App;
