const svinosobaki = {
  "planes": 123,
  "helicopters": 127,
  "cannons": 302,
  "grads": 95,
  "drones": 66,
  "ships": 7,
  "ppo": 54,
  "tanks": 586,
  "bmp": 1694,
  "trucks": 1150,
  "tankers": 73,
  "soldiers": 17000
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
