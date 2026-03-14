const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export function assetUrl(path) {
  if (!path || ABSOLUTE_URL_PATTERN.test(path) || path.startsWith("data:")) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  return `${normalizedBase}${path.replace(/^\/+/, "")}`;
}

export function injectFontFaceStyles() {
  if (typeof document === "undefined" || document.getElementById("app-font-faces")) {
    return;
  }

  const style = document.createElement("style");
  style.id = "app-font-faces";
  style.textContent = `
    @font-face {
      font-family: "PP Neue Montreal-Medium";
      src: url("${assetUrl("fonts/pixso/PP Neue Montreal Medium.otf")}") format("opentype");
      font-style: normal;
      font-weight: 500;
    }

    @font-face {
      font-family: "PP Neue Montreal-Bold";
      src: url("${assetUrl("fonts/pixso/PP Neue Montreal Bold.otf")}") format("opentype");
      font-style: normal;
      font-weight: 700;
    }

    @font-face {
      font-family: "PP Neue Montreal-Book";
      src: url("${assetUrl("fonts/pixso/PP Neue Montreal Book.otf")}") format("opentype");
      font-style: normal;
      font-weight: 400;
    }

    @font-face {
      font-family: "Apfel Grotezk-Mittel";
      src: url("${assetUrl("fonts/pixso/ApfelGrotezk-Mittel.otf")}") format("opentype");
      font-style: normal;
      font-weight: 500;
    }

    @font-face {
      font-family: "Apfel Grotezk-Regular";
      src: url("${assetUrl("fonts/pixso/ApfelGrotezk-Regular.otf")}") format("opentype");
      font-style: normal;
      font-weight: 400;
    }

    @font-face {
      font-family: "Noto Sans SC";
      src: url("${assetUrl("fonts/pixso/NotoSansSC-VariableFont_wght_2.ttf")}") format("truetype");
      font-style: normal;
      font-weight: 100 900;
    }

    @font-face {
      font-family: "Roboto-Regular";
      src: url("${assetUrl("fonts/pixso/Roboto-Regular_1.ttf")}") format("truetype");
      font-style: normal;
      font-weight: 400;
    }
  `;

  document.head.appendChild(style);
}
