import removeTags from "./removeTags";

test("Removes HTML tags", () => {
  expect(removeTags("<p>test</p>")).toEqual("test")
  expect(removeTags("<p>test</p></br>")).toEqual("test")
  expect(removeTags("<img src=''>test")).toEqual("test")
  expect(removeTags("test")).toEqual("test")
  expect(removeTags("")).toEqual("")
  expect(removeTags("<div><p>test </p> more test </div>")).toEqual("test  more test ")
})