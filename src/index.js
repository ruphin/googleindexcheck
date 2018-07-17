const content = `
<style>
  p {
    font-weight: bold;
    font-size: 100px;
  }
</style>
<p>THIS SHOULD RENDER</p>
`;

class MyApp extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = content;
  }
}

customElements.define('my-app', MyApp);
