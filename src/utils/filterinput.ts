export default function filterInput(
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