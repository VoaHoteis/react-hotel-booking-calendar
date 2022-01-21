let rooms = [];

for (let index = 0; index < 16; index++) {
  rooms.push({
    id: index,
    title: `Quarto 1${index <= 9 ? "0" : ""}${index}`,
    category: "Standart/Casal",
    pax: 3,
  });
}

export default rooms;
