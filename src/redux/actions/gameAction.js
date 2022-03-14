import * as type from './types';

export function gameAction(data) {
    return { type: type.GAME_ACTION, payload: data}
}

