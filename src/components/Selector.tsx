// utils
import { IEpisode, ShowInfo } from "../utils/Interfaces";

interface SelectorProps {
    optionList: ShowInfo[] | IEpisode[];
    handleSelect: (id: string) => void;
}

export default function Selector({
    optionList,
    handleSelect,
}: SelectorProps): JSX.Element {
    return (
        <select onChange={(e) => handleSelect(e.target.value)}>
            <option value={"All"}>Show All</option>
            {optionList.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}
