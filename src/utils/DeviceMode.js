import React from "react";

function useDeviceMode() {
    const [deviceMode, setDeviceInfo] = React.useState({
        desktop: window.innerWidth > 768 ? true : false
    });

    function updateDevice(mql) {
        setDeviceInfo(prev => ({...prev, desktop: mql.matches}));
    }

    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 768px)");
        mediaQuery.addEventListener("change", updateDevice);

        return () => {
            mediaQuery.removeEventListener("change", updateDevice);
        };
    }, []);

    return deviceMode;
}

export { useDeviceMode };
