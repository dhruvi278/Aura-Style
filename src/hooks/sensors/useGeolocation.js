import { useLocationContext } from "../../components/context/LocationContext";

function useGeolocation() {
    const {
        setLocation,
        setAddress,
        setLocationError,
        setLocationLoading
    } = useLocationContext();

    const reverseGeocode = async (lat, lng) => {
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
                { headers: { "Accept-Language": "en", "User-Agent": "MyReactApp/1.0" } }
            );
            const data = await res.json();
            return {
                full: data.display_name,
                city: data.address.city || data.address.town || data.address.village || "Unknown",
                state: data.address.state || "Unknown",
                country: data.address.country || "Unknown",
                postcode: data.address.postcode || "Unknown"
            };
        } catch (err) {
            console.error("Reverse geocode failed:", err);
            return null;
        }
    };

    const fetchLocation = () => {
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported");
            console.log("Geolocation is not supported by the browser");
            return;
        }

        setLocationLoading(true);
        setLocationError(null);

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;

                const addressData = await reverseGeocode(lat, lng);

                setLocation({ lat, lng, accuracy: pos.coords.accuracy });
                if (addressData) setAddress(addressData);

                setLocationLoading(false);
                console.log("User allowed location access", { lat, lng, addressData });
            },
            (err) => {
                const messages = {
                    [err.PERMISSION_DENIED]: "Permission denied",
                    [err.POSITION_UNAVAILABLE]: "Location unavailable",
                    [err.TIMEOUT]: "Request timed out"
                };
                setLocationError(messages[err.code] || "Unknown error");
                setLocationLoading(false);
                if (err.code === err.PERMISSION_DENIED) {
                    console.log(" User denied location access");
                } else {
                    console.log("Location error:", messages[err.code] || err);
                }
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    };

    return { fetchLocation };
}

export default useGeolocation;

