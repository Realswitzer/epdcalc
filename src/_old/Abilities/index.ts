import { type Ability } from "../types";

const enhanced_reflexes: Ability = {
    name: "Enhanced Reflexes",
    price: 75_000,
    target: "self",
    cooldown: 55,
    duration: 15,
    id: 8,
    effect(tower) {
        tower.cooldown *= 0.7
        return tower
    },
}

const fatal_bullet: Ability= {
    name: "Fatal Bullet",
    price: 100_000,
    target: "enemies",
    cooldown: 15,
    duration: 0.25,
    id: 9,
    effect(tower) {
        // attacks 1 time with +5k% damage
        return tower
    },
}