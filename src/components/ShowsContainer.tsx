// components
import ShowCard from "./ShowCard";
import Selector from "./Selector";
// utils
import { ShowInfo, IEpisode } from "../utils/Interfaces";
import filterInput from "../utils/filterinput";

interface ShowsListProps {
    showsList: ShowInfo[];
    searchInput: string;
    setEpisodesList: React.Dispatch<React.SetStateAction<IEpisode[]>>;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function ShowsContainer({
    showsList,
    searchInput,
    setEpisodesList,
    setSearchInput,
}: ShowsListProps): JSX.Element {
    const currentShows = showsList.filter((show) =>
        filterInput(show.name, show.summary, searchInput)
    );

    const handleShowSelection = async (id: string) => {
        const response = await fetch(
            `https://api.tvmaze.com/shows/${id}/episodes`
        );
        const jsonbody = await response.json();
        setSearchInput("");
        setEpisodesList([...jsonbody]);
    };

    return (
        <>
            <Selector
                showsList={currentShows}
                handleShowSelection={handleShowSelection}
            />
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
