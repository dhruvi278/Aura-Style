import { createContext, useContext, useState } from "react";

const LocationContext = createContext(null);

function LocationProvider({children}){
    const[location , setLocation] = useState(null);
    const[address,setAddress] = useState(null);
    const[locationError, setLocationError] = useState(null);
    const[locationLoading, setLocationLoading] = useState(false);
    return(
        <LocationContext.Provider value={{
            location,
            setLocation,
            address,
            setAddress,
            locationError,
            setLocationError,
            locationLoading,
            setLocationLoading
        }}>{children}</LocationContext.Provider>
    )
}
export default LocationProvider;

export function useLocationContext(){
    const ctx = useContext(LocationContext);
    if(!ctx) throw new Error("useLocationContext must be inside Locationprovider");
    return ctx;
}