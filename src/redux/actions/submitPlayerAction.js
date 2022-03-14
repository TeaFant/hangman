import * as type from './types';

export function submitPlayer(playerName) {
    return { type: type.SUBMIT_PLAYER, payload: playerName }
}
