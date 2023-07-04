import { EventEmitter } from 'events';

// Créez une instance de EventEmitter pour gérer vos événements
const eventEmitter = new EventEmitter();

// Définissez les noms des événements que vous souhaitez utiliser
export const PASSION_ADDED = 'passionAdded';
export const POST_ADDED = 'postAdded';
// Créez une fonction pour déclencher l'événement de nouvelle passion ajoutée
export const emitPassionAdded = (passion) => {
    eventEmitter.emit(PASSION_ADDED, passion);
};

export const emitPostAdded = (post) => {
    eventEmitter.emit(POST_ADDED, post);
}

// Exportez votre instance de EventEmitter pour l'utiliser ailleurs
export default eventEmitter;
