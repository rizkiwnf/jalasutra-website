import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Footer = () => {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(100%,0)" },
        to: { transform: "translate(-100%,0)" },
        config: { duration: 20000, overflow: 'hidden', },
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });
    return (
        <div className="footer bg-dark-blue text-white w-screen">
            <div className="container mx-auto py-4">
                <div key={key}>
                    <animated.div style={scrolling}>Selamat Datang di Jalasutra, Jenis Layanan Apapun Cukup di Kantor Kecamatan atau Desa.</animated.div>
                </div>
            </div>
        </div>
    )
}
export default Footer;