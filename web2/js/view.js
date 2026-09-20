export class SonnetView {
  constructor({ listElement, readerElement, countElement }) {
    this.listElement = listElement;
    this.readerElement = readerElement;
    this.countElement = countElement;
  }

  renderCatalog(collection, selectedId) {
    this.countElement.textContent = String(collection.length).padStart(2, "0");
    this.listElement.replaceChildren(...collection.map((sonnet, index) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.className = "sonnet-option";
      button.type = "button";
      button.dataset.sonnetId = sonnet.id;
      button.setAttribute("aria-current", String(sonnet.id === selectedId));
      button.innerHTML = `<span class="sonnet-index">${String(index + 1).padStart(2, "0")}</span><span><span class="sonnet-option-title">${sonnet.title}</span><span class="sonnet-option-author">${sonnet.author}</span></span>`;
      item.append(button);
      return item;
    }));
  }

  renderReader(sonnet) {
    const stanzas = sonnet.stanzas.map((stanza) => `
      <div class="stanza">
        ${stanza.map((verse) => `<p class="verse">${verse}</p>`).join("")}
      </div>
    `).join("");

    this.readerElement.innerHTML = `
      <div class="reading-meta"><span>Soneto</span><span>14 versos · 4 estrofas</span></div>
      <article class="sonnet" aria-labelledby="sonnet-title">
        <h2 id="sonnet-title" class="sonnet-title">${sonnet.title}</h2>
        <p class="sonnet-author">por <cite>${sonnet.author}</cite></p>
        <div class="stanzas">${stanzas}</div>
      </article>
    `;
  }
}