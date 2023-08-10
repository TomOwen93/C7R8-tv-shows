export default function removeTags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}
