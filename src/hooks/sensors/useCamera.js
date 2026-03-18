import { useState, useEffect } from "react";

function useCamera() {
    const [hasBackCamera, setHasBackCamera] = useState(false);
    const [hasFrontCamera, setHasFrontCamera] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkCamera = async () => {
            try {
                if (!navigator.mediaDevices?.enumerateDevices()) {
                    setHasBackCamera(false);
                    return;
                }

                await navigator.mediaDevices.getUserMedia({ video: true });
                const devices = await navigator.mediaDevices.enumerateDevices();
                const videoDevice = devices.filter(d => d.kind === "videoinput");

                const backCamera = videoDevice.some(d =>
                    d.label.toLocaleLowerCase().includes('back') ||
                    d.label.toLocaleLowerCase().includes('environment') ||
                    d.label.toLocaleLowerCase().includes('rear')
                  )

                const frontCamera = videoDevice.some(d =>
                    d.label.toLocaleLowerCase().includes('front') ||
                    d.label.toLocaleLowerCase().includes('face') ||
                    d.label.toLocaleLowerCase().includes('user') ||
                    videoDevice.length > 0
                )

                setHasBackCamera(backCamera);
                setHasFrontCamera(frontCamera);
            } catch (error) {
                setHasBackCamera(false);
            } finally {
                setLoading(false);
            }
        }

        checkCamera();
    }, []);

    return { hasBackCamera, hasFrontCamera, loading }
}


export default useCamera;