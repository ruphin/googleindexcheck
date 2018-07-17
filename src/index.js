document.body.appendChild(document.createTextNode('SCRIPT EXECUTING'));

const content = `
<style>
  p {
    font-weight: bold;
    font-size: 100px;
  }
</style>
<p>THIS SHOULD RENDER</p>
`;

document.body.appendChild(document.createTextNode('CONTNENT CREATED'));

class MyApp extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = content;
  }
}

document.body.appendChild(document.createTextNode('CLASS DEFINED'));

customElements.define('my-app', MyApp);

document.body.appendChild(document.createTextNode('CUSTOM ELEMENT DEFINED'));
