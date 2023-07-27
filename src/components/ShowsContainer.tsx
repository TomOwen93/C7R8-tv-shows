// components
import ShowCard from "./ShowCard";

// utils
import { ShowInfo } from "../utils/Interfaces";

interface ShowsListProps {
    currentShows: ShowInfo[];
    setSelectedShow: React.Dispatch<React.SetStateAction<string>>;
}

export default function ShowsContainer({
    currentShows,
    setSelectedShow,
}: ShowsListProps): JSX.Element {
    return (
        <>
            {currentShows.map((show) => (
                <ShowCard
                    key={show.id}
                    show={show}
                    setSelectedShow={setSelectedShow}
                />
            ))}
        </>
    );
}
