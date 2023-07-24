function episodeCode(seaNumber: number, epiNumber: number): string {
    const seaCode = "S" + seaNumber.toString().padStart(2, "0");
    const epiCode = "E" + epiNumber.toString().padStart(2, "0");
    const finalCode = seaCode + epiCode;

    return finalCode;
}

export default episodeCode;
