export class Model {
    constructor() {
        this.sonetos = [];
    }

    async cargarDatos() {
        try {
            const respuesta = await fetch('./data/sonetos.json');
            this.sonetos = await respuesta.json();
        } catch (error) {
            console.error("Error cargando el almacén de sonetos:", error);
        }
    }

    obtenerSoneto(id) {
        return this.sonetos.find(s => s.id === id) || null;
    }
}