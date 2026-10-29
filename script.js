const copyEmail = () => {
  const email = "castaneae_a_publica@proton.me";
  const status = document.getElementById("copyStatus");

  const fallback = () => {
    window.location.href = "mailto:" + email;
  };

  const done = () => {
    status.textContent = "¡Copiado!";
    setTimeout(() => {
      status.textContent = "[Copiar]";
    }, 2000);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(done).catch(fallback);
  } else {
    fallback();
  }
};