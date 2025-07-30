const fs = require('fs');
const jwkToPem = require('jwk-to-pem');

// Paste the full decoded JWK here (replace with yours)
const jwk = {
  kty: "RSA",
  n: "PASTE_YOUR_n_HERE",
  e: "AQAB",
  d: "PASTE_YOUR_d_HERE",
  p: "PASTE_YOUR_p_HERE",
  q: "PASTE_YOUR_q_HERE",
  dp: "PASTE_YOUR_dp_HERE",
  dq: "PASTE_YOUR_dq_HERE",
  qi: "PASTE_YOUR_qi_HERE"
};

const pem = jwkToPem(jwk, { private: true });

fs.writeFileSync('private.key', pem);

console.log("✅ PEM private key saved to private.key");
