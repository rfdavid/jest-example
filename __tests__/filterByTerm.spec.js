const filterByTerm = require("../src/filterByTerm");

const input = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.URL2.dev" },
  { id: 3, url: "https://www.link3.dev" },
  { id: 4, url: "https://www.URL2.dev" }
];

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
  });

  test("it should search case insensitive terms", () => {
    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.URL2.dev" },
      { id: 4, url: "https://www.URL2.dev" }
    ];

    expect(filterByTerm(input, "uRl")).toEqual(output);
  });

  test("it should not allow empty string", () => {

    expect(() => {
      filterByTerm(input, "");
    }).toThrow("searchTerm cannot be empty");
  });
})
