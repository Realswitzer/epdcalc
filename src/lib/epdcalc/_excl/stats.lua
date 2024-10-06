-- https://discord.com/channels/596904213879980042/596905944923897888/1236421241435324568
-- technical names for stats, and maybe this can help with formatting??
{stat = "Radius", prefix = "", suffix = "",plain = "Radius"},
    {stat = "Accuracy", prefix = "", suffix = "",plain = "Inccuracy"},
    {stat = "BurnDmg", prefix = "", suffix = "",plain = "Burn Damage"},
    {stat = "BurnTm", prefix = "", suffix = "s",plain = "Burn Time"},
    {stat = "ResidueLength", prefix = "", suffix = "s",plain = "Residue Length"},
    {stat = "PercAdd", prefix = "", suffix = "%",plain = "Leech"},
    {stat = "Burst", prefix = "", suffix = "",plain = "Burst"},
    {stat = "BurstCooldown", prefix = "", suffix = "s",plain = "Burst CD"},
    {stat = "Stun", prefix = "", suffix = "s",plain = "Stun"},
    {stat = "Bleed", prefix = "", suffix = "",plain = "Bleed"},
    {stat = "Paralyze", prefix = "", suffix = "%",plain = "Paralyze"},
    {stat = "Frostbite", prefix = "", suffix = "%",plain = "Frostbite"},
    {stat = "FBLength", prefix = "", suffix = "s",plain = "Frost Time"},
    {stat = "ScorchStrength", prefix = "", suffix = "%",plain = "Scorch"},
    {stat = "ScorchLength", prefix = "", suffix = "s",plain = "Scorch Length"},
    {stat = "BlizzardLength", prefix = "", suffix = "s",plain = "Bliz. Length"},
    {stat = "BlizzardRadius", prefix = "", suffix = "",plain = "Bliz. Radius"},
    {stat = "BountyAmp", prefix = "", suffix = "%",plain = "Bounty Amp"},
    {stat = "BountyAdd", prefix = "$", suffix = "",plain = "Bounty Add"},
    {stat = "CritChance", prefix = "", suffix = "%",plain = "Crit. Chance"},
    {stat = "FirstStrike", prefix = "", suffix = "x",plain = "First Strike"},
    {stat = "Purify", prefix = "", suffix = "x",plain = "Purify"},
    {stat = "AllSee", prefix = "", suffix = "x",plain = "All Seeing"},
    {stat = "Execution", prefix = "", suffix = "%",plain = "Execution"},
    {stat = "Valor", prefix = "", suffix = "%",plain = "Valor"},
    {stat = "Scald", prefix = "", suffix = "%",plain = "Scald"},
    {stat = "AD", prefix = "", suffix = "%",plain = "Armor Destruction"},

-- simple typescript implementation
/*ts
`${plain}: ${prefix}${foo}${suffix}`

// form 2
let s:string = '';
for(stat in tower:TowerUpgrade) {
  s=`${s}${plain}: ${prefix}${foo}${suffix}\n`;
}
return s;
*/