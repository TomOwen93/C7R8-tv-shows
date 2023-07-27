// utils
import { IEpisode, ShowInfo } from "../utils/Interfaces";
import episodeCode from "../utils/episodecode";

interface SelectorProps {
    optionList: ShowInfo[] | IEpisode[];
    handleSelect: (id: string) => void;
    selectedItemId?: string;
    selectType?: string;
}

export default function Selector({
    optionList,
    handleSelect,
    selectedItemId,
}: SelectorProps): JSX.Element {
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
                    {"season" in item
                        ? episodeCode(item.season, item.number)
                        : item.name}
                </option>
            ))}
        </select>
    );
}
