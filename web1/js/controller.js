// js/controller.js
export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.enlazarSeleccion(this.manejarSeleccion.bind(this));
    }

    async inicializar() {
        await this.model.cargarDatos();
        if (this.model.sonetos.length > 0) {
            this.view.renderizarSelector(this.model.sonetos);
            // Carga el primer soneto automáticamente
            this.manejarSeleccion(this.model.sonetos[0].id);
        }
    }

    manejarSeleccion(id) {
        const soneto = this.model.obtenerSoneto(id);
        this.view.renderizarSoneto(soneto);
    }
}