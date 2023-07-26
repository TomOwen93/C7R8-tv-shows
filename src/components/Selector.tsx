// utils
import { ShowInfo } from "../utils/Interfaces";

interface SelectorProps {
    showsList: ShowInfo[];
    handleShowSelection: (id: string) => void;
}

export default function Selector({
    showsList,
    handleShowSelection,
}: SelectorProps): JSX.Element {
    const alphabetical = showsList.sort((a, b) => (a.name > b.name ? 1 : -1));

    return (
        <select onChange={(e) => handleShowSelection(e.target.value)}>
            <option disabled selected>
                {" "}
                -- select a show --{" "}
            </option>
            {alphabetical.map((show) => (
                <option key={show.id} value={show.id}>
                    {show.name}
                </option>
            ))}
        </select>
    );
}
