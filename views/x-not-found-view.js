class XNotFoundView extends HTMLElement {
  connectedCallback() {
    if  (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
    }
  }

  onAfterEnter(context) {
    this.__render({
      pathname: context.pathname
    });
  }

  __render(props) {
    this.shadowRoot.innerHTML = `
      <h1>404</h1>
      <p>
        You've tried to open '${props.pathname}' but alas there is nothing there :(
      </p>`;
  }
}

window.customElements.define('x-not-found-view', XNotFoundView);