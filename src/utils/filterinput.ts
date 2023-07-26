export function filterInput(
    name: string,
    summary: string | null,
    searchInput: string
): boolean {
    return (
        name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
        (summary !== null &&
            summary
                .toLocaleLowerCase()
                .includes(searchInput.toLocaleLowerCase()))
    );
}

export function filterSelect(
    selectedId: string,
    showId: string
): boolean | void {
    return selectedId === "All" ? true : showId === selectedId;
}
