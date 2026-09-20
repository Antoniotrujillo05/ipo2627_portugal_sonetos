import { SonnetModel } from "./model.js";
import { SonnetView } from "./view.js";

const model = new SonnetModel();
const view = new SonnetView({
  listElement: document.querySelector("#sonnet-list"),
  readerElement: document.querySelector("#reader"),
  countElement: document.querySelector("#catalog-count")
});

function render() {
  view.renderCatalog(model.getAll(), model.selectedId);
  view.renderReader(model.getSelected());
}

document.querySelector("#sonnet-list").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-sonnet-id]");
  if (!button || !model.select(button.dataset.sonnetId)) {
    return;
  }
  render();
});

render();