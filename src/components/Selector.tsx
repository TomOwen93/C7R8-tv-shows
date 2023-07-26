import { IEpisode, ShowInfo } from "../utils/Interfaces";

interface SelectorProps<T> {
    optionList: T[];
    handleSelect: (id: string) => void;
    selectedItemId?: string;
    prepareDisplayText: (item: T) => string;
}

export default function Selector<T extends IEpisode | ShowInfo>({
    optionList,
    handleSelect,
    selectedItemId,
    prepareDisplayText,
}: SelectorProps<T>): JSX.Element {
    return (
        <select onChange={(e) => handleSelect(e.target.value)}>
            <option selected={selectedItemId === "All"} value={"All"}>
                Show All
            </option>
            {optionList.map((item) => (
                <option
                    selected={selectedItemId === item.id.toString()}
                    key={item.id}
                    value={item.id}
                >
                    {prepareDisplayText(item)}
                </option>
            ))}
        </select>
    );
}
