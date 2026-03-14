import { createApp } from "vue";
import "@src/style.scss";
import Index from "@src/Index.vue";
import { injectFontFaceStyles } from "@src/utils/asset";

injectFontFaceStyles();
createApp(Index).mount("#app");
