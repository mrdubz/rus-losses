const svinosobaki = {
  "planes": 211,
  "helicopters": 176,
  "cannons": 690,
  "grads": 207,
  "drones": 551,
  "ships": 13,
  "ppo": 96,
  "tanks": 1386,
  "bmp": 3400,
  "trucks": 2395,
  "tankers": 76,
  "soldiers": 31250
}

for (const key in svinosobaki) {
  const element = document.getElementById(key);
  element.innerHTML = svinosobaki[key]
  for (let i= 0; i <= svinosobaki[key] - 1; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    document.getElementById(`${key}_list`).appendChild(div)
  }
}
