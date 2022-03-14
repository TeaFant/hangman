import * as type from './types';

export function resetScore(score) {
    return { type: type.RESET_SCORE, payload: score }
}

