const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  }),
    it("First book name should be equal second book name", () => {
      expect(sorting.sortByName(["Книга", "Книга"])).toEqual([
        "Книга",
        "Книга",
      ]);
    });
});
