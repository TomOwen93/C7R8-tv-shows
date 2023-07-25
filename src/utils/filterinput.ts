export default function filterInput(
    name: string,
    summary: string,
    searchInput: string
): boolean {
    return (
        name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
        summary.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
}
