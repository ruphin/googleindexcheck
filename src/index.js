const content = `
<style>
  :host {
    display: inline-block;
    background: black;
    color: white;
  }
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
