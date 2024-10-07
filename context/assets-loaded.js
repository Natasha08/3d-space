import {createContext, useContext, useState} from "react";

const Context = createContext();

export default function AssetsLoadedProvider({children}) {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  return (
    <Context.Provider value={[assetsLoaded, setAssetsLoaded]}>{children}</Context.Provider>
  );
}

export function useAssetsLoadedContext() {
  return useContext(Context);
}
