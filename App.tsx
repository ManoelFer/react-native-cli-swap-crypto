import { SwapCrypto } from './src/screens';
import { SwapCryptoContextProvider } from '@/context'

const App = () => {
  return (
    <SwapCryptoContextProvider>
      <SwapCrypto />
    </SwapCryptoContextProvider>
  );
};

export default App;
