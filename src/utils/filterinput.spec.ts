import filterInput from "./filterinput";

test("filterInput will check that name or summary matches the search value", () => {
    expect(filterInput("winter", "there is winter", "WINTER")).toEqual(true);
    expect(filterInput("winter", "", "WINTER")).toEqual(true);
    expect(filterInput("", "there is winter", "WINTER")).toEqual(true);
    expect(filterInput("winter", "there is winter", "SUMMER")).toEqual(false);
    expect(filterInput("", "", "")).toEqual(true);
    expect(filterInput("winter", "there is winter", "")).toEqual(true);
});
