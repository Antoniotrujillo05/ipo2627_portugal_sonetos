export class View {
    constructor() {
        this.selector = document.getElementById('selector-soneto');
        this.contenedor = document.getElementById('contenedor-soneto');
    }

    enlazarSeleccion(handler) {
        this.selector.addEventListener('change', (e) => handler(e.target.value));
    }

    renderizarSelector(sonetos) {
        this.selector.innerHTML = sonetos.map(s => 
            `<option value="${s.id}">${s.titulo} - ${s.autor}</option>`
        ).join('');
    }

    renderizarSoneto(soneto) {
        if (!soneto) {
            this.contenedor.innerHTML = '<p>Soneto no disponible.</p>';
            return;
        }

        const estrofasHtml = soneto.estrofas.map(estrofa => 
            `<p class="soneto__estrofa">${estrofa.join('<br>')}</p>`
        ).join('');

        this.contenedor.innerHTML = `
            <header class="soneto__cabecera">
                <h1 class="soneto__titulo">${soneto.titulo}</h1>
                <p class="soneto__autor">${soneto.autor}</p>
            </header>
            <div class="soneto__cuerpo">
                ${estrofasHtml}
            </div>
        `;
    }
}