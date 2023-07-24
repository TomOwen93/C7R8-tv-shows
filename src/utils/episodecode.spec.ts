import episodeCode from "./episodecode";

test("episodeCode adds leading 0 to numbers smaller than 10", () => {
    expect(episodeCode(3, 7)).toEqual("S03E07");
    expect(episodeCode(1, 0)).toEqual("S01E00");
});

test("episodeCode doesn't add a leading 0 to numbers greater than 10", () => {
    expect(episodeCode(20, 14)).toEqual("S20E14");
    expect(episodeCode(37, 2114)).toEqual("S37E2114");
});
