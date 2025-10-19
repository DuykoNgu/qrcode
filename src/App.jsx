import QRcode from "qrcode";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [qrcode, setQrcode] = useState("");

  const generateQrcode = () => {
    const link = `${window.location.origin}/greet?name=${encodeURIComponent(name)}`
    QRcode.toDataURL(link, { width: 800, margin: 1 }, (err, url) => {
      if (err) return console.err(err);

      console.log(url);
      setQrcode(url);
    });
  };

  return (
    <>
      <div className="app">
        <h1>Hello</h1>
        <input
          type="text"
          placeholder="You can generate any qr in hear!"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={generateQrcode}>Generate</button>

        {qrcode && (
          <>
            <img src={qrcode} />
            <a href={qrcode} download={`QR_${name}.png`}
            style={{
              color: "green",
              fontSize: "2rem",
              textDecoration: "none"
            }}>
              Dowload
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default App;
