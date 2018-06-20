class XUserProfileView extends HTMLElement {
  connectedCallback() {
    if  (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
    }
  }

  onAfterEnter(context) {
    this.__render({
      id: context.params.id
    });
  }

  __render(props) {
    this.shadowRoot.innerHTML = `
      <h1>Profile</h1>
      <p>(here is everything there is to know about the user with the ID '${props.id}')</p>
      <p>
        <em>nothing</em>
      </p>`;
  }
}

window.customElements.define('x-user-profile-view', XUserProfileView);