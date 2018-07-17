const content = `
<style>
  p {
    background: white;
    color: black;
    font-weight: bold;
    font-size: 100px;
    margin: 0;
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
