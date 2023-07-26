// components
import ShowCard from "./ShowCard";

// utils
import { ShowInfo } from "../utils/Interfaces";

interface ShowsListProps {
    currentShows: ShowInfo[];
    handleShowSelection: (id: string) => void;
}

export default function ShowsContainer({
    currentShows,
    handleShowSelection,
}: ShowsListProps): JSX.Element {
    return (
        <>
            {currentShows.map((show) => (
                <ShowCard
                    key={show.id}
                    show={show}
                    handleShowSelection={handleShowSelection}
                />
            ))}
        </>
    );
}
