// utils
import { IEpisode, ShowInfo } from "../utils/Interfaces";

interface SelectorProps {
    optionList: ShowInfo[] | IEpisode[];
    handleSelect: (id: string) => void;
    selectedShow?: string;
}

export default function Selector({
    optionList,
    handleSelect,
    selectedShow,
}: SelectorProps): JSX.Element {
    return (
        <select onChange={(e) => handleSelect(e.target.value)}>
            <option selected={selectedShow === "All"} value={"All"}>
                Show All
            </option>
            {optionList.map((item) => (
                <option
                    selected={selectedShow === item.id.toString()}
                    key={item.id}
                    value={item.id}
                >
                    {item.name}
                </option>
            ))}
        </select>
    );
}
