!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";customElements.define("my-app",class MyApp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML="\n<style>\n  p {\n    font-weight: bold;\n    font-size: 100px;\n  }\n</style>\n<p>THIS SHOULD RENDER</p>\n"}})});
//# sourceMappingURL=index.umd.js.map
