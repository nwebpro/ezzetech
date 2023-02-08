import React from 'react';

const FooterBg = () => {
    return (
        <svg
            className="w-full h-full absolute left-0 top-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 720"
            preserveAspectRatio="none"
        >
            <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1={2741.487}
            y1={2717.352}
            x2={-1771.344}
            y2={1921.618}
            gradientTransform="rotate(-10.003 610.714 -11.86)"
            >
            <stop
                offset={0}
                style={{
                stopColor: "#040c5e",
                }}
            />
            <stop
                offset={0.286}
                style={{
                stopColor: "#040c5e",
                }}
            />
            <stop
                offset={1}
                style={{
                stopColor: "#040c5e",
                }}
            />
            </linearGradient>
            <path
            className="st0"
            style={{
                fill: "url(#a)",
            }}
            d="m-1381.2 2764.3 320.5 793.3c13.1 32.5 32.9 61.8 58.1 86.2l615.4 594.3c25.2 24.3 55.2 43.1 88.2 55.1l804 292.6c32.9 12 68 16.9 102.9 14.5l853.5-59.7c34.9-2.4 69-12.2 99.9-28.7l755.4-401.7c30.9-16.4 58.1-39.2 79.6-66.8l526.7-674.2c21.6-27.6 37.1-59.4 45.6-93.4l207-830.1c8.5-34 9.7-69.4 3.6-103.9l-148.6-842.6c-6.1-34.5-19.4-67.3-38.9-96.4l-478.4-709.3c-19.6-29-45.1-53.6-74.8-72.2L1713 168c-29.7-18.6-63-30.7-97.7-35.6L768.1 13.3c-34.7-4.9-70-2.4-103.7 7.3L-158 256.4c-33.7 9.7-64.9 26.3-91.8 48.8l-655.4 549.9c-26.8 22.5-48.6 50.4-64 81.9l-375 769c-15.4 31.5-23.9 65.9-25.1 100.9l-29.9 855c-1.3 35 4.9 69.9 18 102.4z"
            />
        </svg>
    );
};

export default FooterBg;