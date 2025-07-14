import React from 'react';
import { QRCode } from 'react-qr-code';

export default function QrGenerator() {
  const qrValue = `http://localhost:3000/api/qr/karimsarhan74@gmail.com`; // Direct backend URL
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <QRCode 
        value={qrValue}
        size={256}
        bgColor="#ffffff"
        fgColor="#000000"
      />
      <p>Scan this QR code to trigger email</p>
    </div>
  );
}