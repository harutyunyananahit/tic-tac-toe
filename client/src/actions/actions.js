export function move(i) {
    return {
        type: "MOVE",
        i
    };
}

export function jump_to_state(step) {
    return {
        type: "JUMP_TO_STATE",
        step
    };
}
