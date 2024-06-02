import React, { useEffect } from 'react';

const CalendlyPopupWidget = () => {
  useEffect(() => {
    // Calendly script dosyasını sayfaya ekleyin
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Script yüklendikten sonra Calendly widget'ını başlatın
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/hmuygurer347/deneme',
          text: 'booking',
          color: '#fff',
          textColor: 'black',
          branding: undefined
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <link
      href="https://assets.calendly.com/assets/external/widget.css"
      rel="stylesheet"
    />
  );
};

export default CalendlyPopupWidget;
