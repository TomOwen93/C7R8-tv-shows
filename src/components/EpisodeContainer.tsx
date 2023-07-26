// utils
import filterInput from "../utils/filterinput";
import { IEpisode } from "../utils/Interfaces";
// components
import Episode from "./Episode";

interface EpisodeContainerProps {
    episodesList: IEpisode[];
    searchInput: string;
}

export default function EpisodeContainer({
    episodesList,
    searchInput,
}: EpisodeContainerProps): JSX.Element {
    const currentEpisodes = episodesList.filter((episode) =>
        filterInput(episode.name, episode.summary, searchInput)
    );

    const allEpisodes = currentEpisodes.map((episode) => {
        return <Episode {...episode} key={episode.id} />;
    });

    return (
        <>
            <p>{`Displaying ${currentEpisodes.length} / ${episodesList.length} episodes`}</p>

            <div className="episode-container">{allEpisodes}</div>
        </>
    );
}
