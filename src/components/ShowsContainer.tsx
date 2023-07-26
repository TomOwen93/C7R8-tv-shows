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
}

export default function ShowsContainer({
    showsList,
    searchInput,
    setEpisodesList,
}: ShowsListProps): JSX.Element {
    const currentShows = showsList.filter((show) =>
        filterInput(show.name, show.summary, searchInput)
    );

    return (
        <>
            <Selector
                showsList={currentShows}
                setEpisodesList={setEpisodesList}
            />
            {currentShows.map((show) => (
                <ShowCard key={show.id} {...show} />
            ))}
        </>
    );
}
