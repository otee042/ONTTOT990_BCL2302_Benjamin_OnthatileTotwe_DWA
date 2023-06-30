import { html, css, LitElement } from 'lit';

class TallyApp extends LitElement {

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  subtractHandler() {
    if (this.count > MIN_NUMBER) {
      this.count -= STEP_AMOUNT;
      this.requestUpdate();
    }
  }

  addHandler() {
    if (this.count < MAX_NUMBER) {
      this.count += STEP_AMOUNT;
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <header class="header">
        <h1 class="header_title">
          Tally Count
        </h1>
      </header>

      <main class="counter">
        <input
          class="counter_value"
          readonly
          .value=${this.count}
        />

        <div class="counter_actions">
          <button
            class="counter_button counter_button_first"
            @click=${this.subtractHandler}
            ?disabled=${this.count <= MIN_NUMBER}
          >
            -
          </button>
          <button
            class="counter_button"
            @click=${this.addHandler}
            ?disabled=${this.count >= MAX_NUMBER}
          >
            +
          </button>
        </div>
      </main>

      <footer class="footer">
        Inspired by
        <a class="footer_link" href="https://tallycount.app/">Tally Count</a>.
        Note that this is merely a student practice project for learning JavaScript.
      </footer>
    `;
  }
}

customElements.define('tally-app', TallyApp);
