import { SwapCrypto } from './src/screens';
import { SwapCryptoContextProvider } from '@/context'

import { View } from 'react-native'

const App = () => {
  return (
    <SwapCryptoContextProvider>
      <SwapCrypto />
    </SwapCryptoContextProvider>
  );
};

export default App;
