class XUsersView extends HTMLElement {
  connectedCallback() {
    const root = this.shadowRoot || this.attachShadow({mode: 'open'});
    root.innerHTML = `
      <h1>Users</h1>
      <p>We welcome everybody here!</p>
      <p>Check out <a href="/users/sam">Sam's profile</a></p>`;
  }
}

window.customElements.define('x-users-view', XUsersView);