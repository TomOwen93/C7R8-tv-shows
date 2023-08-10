// utils
import { filterInput } from "../utils/filterinput";
import { IEpisode } from "../utils/Interfaces";
// components
import Episode from "./Episode";

interface EpisodeContainerProps {
    episodesToDisplay: IEpisode[];
    searchInput: string;
}

export default function EpisodeContainer({
    episodesToDisplay,
    searchInput,
}: EpisodeContainerProps): JSX.Element {
    const currentEpisodes = episodesToDisplay.filter((episode) =>
        filterInput(episode.name, episode.summary, searchInput)
    );

    const allEpisodes = currentEpisodes.map((episode) => {
        return <Episode {...episode} key={episode.id} />;
    });

    return (
        <>
            <p className="episode-count">{`Displaying ${currentEpisodes.length} / ${episodesToDisplay.length} episodes`}</p>

            <div className="episode-container">{allEpisodes}</div>
        </>
    );
}
