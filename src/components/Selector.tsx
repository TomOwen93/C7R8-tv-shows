import { ShowInfo, IEpisode } from "./App";

interface SelectorProps {
    showsList: ShowInfo[];
    setEpisodesList: React.Dispatch<React.SetStateAction<IEpisode[]>>;
}

export default function Selector({
    showsList,
    setEpisodesList,
}: SelectorProps): JSX.Element {
    const fetchEpisodes = async (id: string) => {
        const response = await fetch(
            `https://api.tvmaze.com/shows/${id}/episodes`
        );
        const jsonbody = await response.json();
        setEpisodesList([...jsonbody]);
    };

    const alphabetical = showsList.sort((a, b) => (a.name > b.name ? 1 : -1));

    return (
        <select onChange={(e) => fetchEpisodes(e.target.value)}>
            <option disabled selected>
                {" "}
                -- select a show --{" "}
            </option>
            {alphabetical.map((show) => (
                <option key={show.id} value={show.id}>
                    {show.name}
                </option>
            ))}
        </select>
    );
}
