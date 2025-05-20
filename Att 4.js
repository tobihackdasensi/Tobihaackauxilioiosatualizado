// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-gray; icon-glyph: magic;
// Inicia o script
createLogin();

async function createLogin() {
  let alert = new Alert();
  alert.title = "TOBI HACK";
  alert.message = "Digite seu login:";
  alert.addTextField("Senha");
  alert.addAction("Login");
  alert.addCancelAction("Cancelar");

  let response = await alert.present();
  let password = alert.textFieldValue(0).trim();

  if (password === "T") {
    let webView = new WebView();
    let html = createMenu("aimbot");
    await webView.loadHTML(html);

    webView.shouldAllowRequest = req => {
      if (req.url.startsWith("scriptable://aimbot")) {
        webView.loadHTML(createMenu("aimbot"));
        return false;
      }
      if (req.url.startsWith("scriptable://info")) {
        webView.loadHTML(createMenu("info"));
        return false;
      }
      if (req.url.startsWith("scriptable://injetado")) {
        Safari.open("freefire://");
        Speech.speak("Auxílio injetado");

        let notification = new Notification();
        notification.title = "TOBI HACK";
        notification.body = "Auxílio tobihack injetado🍓";
        notification.sound = "default";
        notification.setTriggerDate(new Date(Date.now() + 3000));
        notification.schedule();

        return false;
      }
      return true;
    };

    await webView.present();
  } else {
    let errorAlert = new Alert();
    errorAlert.title = "Erro";
    errorAlert.message = "Senha incorreta!";
    errorAlert.addAction("OK");
    await errorAlert.present();
  }
}

function createMenu(page = "aimbot") {
  if (page === "info") {
    const device = Device;
    const modelo = device.model();
    const nomeSistema = device.systemName();
    const versaoSistema = device.systemVersion();

    return `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { 
          background: black; 
          color: white; 
          font-family: sans-serif; 
          text-align: center; 
          padding: 20px;
        }
        .tab {
          margin-bottom: 20px;
        }
        .tab a {
          color: white;
          padding: 10px 20px;
          margin: 0 5px;
          border: 2px solid #00ff55;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
        }
        .tab a.active {
          background: #00ff55;
          color: black;
        }
        .info-box {
          margin-top: 20px;
          padding: 15px;
          border: 2px solid #00ff55;
          border-radius: 10px;
          background-color: #111;
        }
        h2 {
          color: #00ff55;
          margin-bottom: 10px;
        }
        p {
          margin: 5px 0;
        }
        .username {
          font-weight: bold;
          color: #00ff55;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="tab">
        <a href="scriptable://aimbot">Aimbot</a>
        <a href="scriptable://info" class="active">Info</a>
      </div>
      <h2></h2>
      <div class="info-box">
        <p class="username">@tobi.haack</p>
        <p><strong>Modelo:</strong> ${modelo}</p>
        <p><strong>Sistema:</strong> ${nomeSistema}</p>
        <p><strong>Versão:</strong> ${versaoSistema}</p>
      </div>
    </body>
    </html>
    `;
  }

  // Página principal (aimbot)
  return `
  <!DOCTYPE html>
  <html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AUXÍLIO DO TOBI HACK</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        background: #000;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 20px;
      }
      .tab {
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      .tab a {
        color: white;
        padding: 8px 14px;
        border: 2px solid #00ff55;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
      }
      .tab a.active {
        background: #00ff55;
        color: black;
      }
      .container {
        width: 100%;
        max-width: 400px;
        background: #000;
        padding: 20px;
        border-radius: 12px;
        border: 2px solid #00ff55;
        box-shadow: 0 0 15px rgba(0, 255, 85, 0.8);
        overflow-y: auto;
      }
      h2 {
        font-size: 20px;
        font-weight: bold;
        color: #00ff55;
        text-shadow: 0 0 10px #00ff55;
        margin-bottom: 10px;
      }
      .option, .slider-container {
        margin: 12px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .option input[type="checkbox"] {
        accent-color: #00ff55;
        transform: scale(1.3);
        cursor: pointer;
        transition: transform 0.2s ease;
      }
      .option label {
        margin-left: 8px;
        transition: color 0.3s ease;
      }
      .slider {
        flex: 1;
        accent-color: #00ff55;
        height: 6px;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 255, 85, 0.8);
      }
      .dropdown {
        width: 100%;
        padding: 10px;
        background: #111;
        border: 1px solid #00ff55;
        color: white;
        border-radius: 6px;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
        box-shadow: 0 0 5px #00ff55;
      }
      .button {
        width: 100%;
        padding: 14px;
        background: #111;
        border: 2px solid #00ff55;
        color: white;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 15px;
        box-shadow: 0 0 15px #00ff55;
        transition: 0.3s ease-in-out;
        font-size: 16px;
      }
      .button:hover {
        background: #00ff55;
        color: black;
        box-shadow: 0 0 20px #00ff55;
        transform: scale(1.05);
      }

      .radio-container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 10px;
      }
      .radio-container input[type="checkbox"] {
        display: none;
      }
      .radio-container label {
        font-size: 14px;
        font-weight: bold;
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        transition: 0.3s;
        border: 2px solid #00cc44;
        cursor: pointer;
      }
      .radio-container input[type="checkbox"]:checked + label {
        background: #00cc44;
        color: black;
        box-shadow: 0 0 8px #00cc44;
      }
    </style>
  </head>
  <body>
    <div class="tab">
      <a href="scriptable://aimbot" class="active">Aimbot</a>
      <a href="scriptable://info">Info</a>
    </div>
    <div class="container">
      <h2>AUXÍLIO TOBI HACK</h2>

      <div class="option">
        <input type="checkbox" id="aimtrigger">
        <label for="aimtrigger">AimTrigger</label>
      </div>
      <div class="option">
        <input type="checkbox" id="aimbot">
        <label for="aimbot">Aimbot</label>
      </div>
      <div class="option">
        <input type="checkbox" id="aimneck">
        <label for="aimneck">Aimneck</label>
      </div>

      <div class="slider-container">
        <span>Fov:</span>
        <input type="range" id="fovRange" class="slider" min="1" max="10" value="5">
        <span id="fovValue">5</span>
      </div>
      <div class="slider-container">
        <span>Trick Head:</span>
        <input type="range" id="trickHeadRange" class="slider" min="1" max="100" value="50">
        <span id="trickHeadValue">50</span>
      </div>
      <div class="slider-container">
        <span>Trick Lock:</span>
        <input type="range" id="trickLockRange" class="slider" min="1" max="100" value="50">
        <span id="trickLockValue">50</span>
      </div>

      <h4>Tipo de Auxílio:</h4>
      <select class="dropdown" id="tipoAuxilio">
        <option>Auxílio Head</option>
        <option>Auxílio Sensi</option>
        <option>Auxílio Total</option>
      </select>

      <h4>Extras:</h4>
      <div class="radio-container">
        <input type="checkbox" id="recuo">
        <label for="recuo">Auxílio Recuo</label>
        <input type="checkbox" id="scope">
        <label for="scope">Auxílio Scope</label>
      </div>

      <button class="button" id="injectButton" onclick="ativarFuncoes()">INJECT FREE FIRE FILES</button>
    </div>

    <script>
      document.getElementById("fovRange").addEventListener("input", function() {
        document.getElementById("fovValue").textContent = this.value;
      });
      document.getElementById("trickHeadRange").addEventListener("input", function() {
        document.getElementById("trickHeadValue").textContent = this.value;
      });
      document.getElementById("trickLockRange").addEventListener("input", function() {
        document.getElementById("trickLockValue").textContent = this.value;
      });

      function ativarFuncoes() {
        const btn = document.getElementById("injectButton");
        btn.textContent = "INJETANDO...";
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = "INJETADO!";
          window.location.href = "scriptable://injetado";
          setTimeout(() => {
            btn.textContent = "INJECT FREE FIRE FILES";
            btn.disabled = false;
          }, 2000);
        }, 3000);
      }
    </script>
  </body>
  </html>
  `;
}