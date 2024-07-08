import { useState } from 'react';
import SearchComponent from './Components/SearchComponent'
import NFTView from './Components/NFTView'

function App() {
  const [wallet, setWallet] = useState(null)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SearchComponent wallet={wallet} setWallet={setWallet} />
      <NFTView wallet={wallet} />
    </div>
  );
}

export default App;