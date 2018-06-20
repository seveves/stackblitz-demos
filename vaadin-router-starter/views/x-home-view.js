class XHomeView extends HTMLElement {
  connectedCallback() {
    const root = this.shadowRoot || this.attachShadow({mode: 'open'});
    root.innerHTML = `<h1>Home</h1><p>There is no place like home!</p>`;
  }
}

window.customElements.define('x-home-view', XHomeView);