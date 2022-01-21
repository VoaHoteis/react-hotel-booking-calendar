let rooms = [];
const categories = ["Standart", "Standart/Casal", "Suíte", "Quarto Triplo"];

for (let index = 1; index < 15; index++) {
  rooms.push({
    id: index,
    title: `Quarto 1${index <= 9 ? "0" : ""}${index}`,
    category: categories[Math.floor(Math.random() * (3 - 0 + 1) + 0)],
    pax: 3,
  });
}

export default rooms;
