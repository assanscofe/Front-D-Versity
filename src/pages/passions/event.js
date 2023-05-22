import { EventEmitter } from 'events';

// Créez une instance de EventEmitter pour gérer vos événements
const eventEmitter = new EventEmitter();

// Définissez les noms des événements que vous souhaitez utiliser
export const PASSION_ADDED = 'passionAdded';

// Créez une fonction pour déclencher l'événement de nouvelle passion ajoutée
export const emitPassionAdded = (passion) => {
  eventEmitter.emit(PASSION_ADDED, passion);
};

// Exportez votre instance de EventEmitter pour l'utiliser ailleurs
export default eventEmitter;
