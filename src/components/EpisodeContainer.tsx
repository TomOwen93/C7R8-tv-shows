// utils
import { filterInput } from "../utils/filterinput";
import { IEpisode } from "../utils/Interfaces";
// components
import Episode from "./Episode";

interface EpisodeContainerProps {
    episodesList: IEpisode[];
    searchInput: string;
    setEpisodesList: React.Dispatch<React.SetStateAction<IEpisode[]>>;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function EpisodeContainer({
    episodesList,
    searchInput,
    setEpisodesList,
    setSearchInput,
}: EpisodeContainerProps): JSX.Element {
    const currentEpisodes = episodesList.filter((episode) =>
        filterInput(episode.name, episode.summary, searchInput)
    );

    const allEpisodes = currentEpisodes.map((episode) => {
        return <Episode {...episode} key={episode.id} />;
    });

    const handleGoBack = () => {
        setSearchInput("");
        setEpisodesList([]);
    };

    return (
        <>
            <button onClick={handleGoBack}>Go back</button>
            <p>{`Displaying ${currentEpisodes.length} / ${episodesList.length} episodes`}</p>

            <div className="episode-container">{allEpisodes}</div>
        </>
    );
}
