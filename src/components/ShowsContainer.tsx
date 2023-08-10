// components
import ShowCard from "./ShowCard";

// utils
import { ShowInfo } from "../utils/Interfaces";

interface ShowsListProps {
    showsToDisplay: ShowInfo[];
    setSelectedShow: React.Dispatch<React.SetStateAction<string>>;
}

export default function ShowsContainer({
    showsToDisplay,
    setSelectedShow,
}: ShowsListProps): JSX.Element {
    return (
        <div className="shows-container">
            {showsToDisplay.map((show) => (
                <ShowCard
                    key={show.id}
                    show={show}
                    setSelectedShow={setSelectedShow}
                />
            ))}
        </div>
    );
}
