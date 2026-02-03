import { Enemy as _Enemy } from "../types";

export interface Debuffs {
  rad?: number;
  scorch?: number;
  frostbite?: number;
  shred?: number;
  stun?: number;
  bleed?: number;
  burn?: number;
  rupture?: number;
  // first_strike, implement lengths. possibly via setTimeout?
}

export class Enemy implements _Enemy {
  public id!: string;
  public name!: string;
  public health!: number;
  public maxHealth: number;
  public shield!: number;
  public boss?: boolean;
  public armor?: boolean;
  public corrupted?: boolean;

  public debuffs: Required<Debuffs> = {
    rad: 0,
    scorch: 0,
    frostbite: 0,
    shred: 0,
    stun: 0,
    bleed: 0,
    burn: 0,
    rupture: 0,
  };

  public constructor(enemy: _Enemy) {
    Object.assign(this, enemy);
    this.maxHealth = enemy.health;
  }

  public setDebuff(debuff: { type: keyof Debuffs; strength: number }) {
    this.debuffs[debuff.type] += debuff.strength;
  }

  public setTimedDebuff(debuff: {
    type: keyof Debuffs;
    strength: number;
    duration: number;
  }) {
    this.debuffs[debuff.type] += debuff.strength;
    setTimeout(() => {
      this.debuffs[debuff.type] -= debuff.strength;
    }, debuff.duration * 1000);
  }

  public getRadMultiplier(): number {
    return this.debuffs.rad + 1;
  }

  public getScorchMultiplier(): number {
    return this.debuffs.scorch + 1;
  }

  public getRuptureMultiplier(): number {
    return this.debuffs.rupture + 1;
  }
}
