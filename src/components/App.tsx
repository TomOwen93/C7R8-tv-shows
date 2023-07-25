import "./App.css";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import Selector from "./Selector";
import filterInput from "../utils/filterinput";
import { Episode } from "./Episode";
import { useEffect, useState } from "react";
import { Show } from "../utils/ShowInterface";

export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    rating: { average: number | null };
    runtime: number;
    image: {
        medium: string;
        original: string;
    } | null;
    summary: string | null;
    _links: { self: { href: string } };
}

export interface ShowInfo {
    id: number;
    name: string;
}

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [episodesList, setEpisodesList] = useState<IEpisode[]>([]);
    const [showsList, setShowsList] = useState<ShowInfo[]>([]);

    const fetchShows = async () => {
        const response = await fetch("http://api.tvmaze.com/shows?page=1");
        const jsonbody: Show[] = await response.json();
        const showInfo = jsonbody.map((show) => {
            return { id: show.id, name: show.name };
        });
        setShowsList([...showInfo]);
    };

    useEffect(() => {
        fetchShows();
    }, []);

    const currentEpisodes = episodesList.filter((episode) =>
        filterInput(episode.name, episode.summary, searchInput)
    );

    const allEpisodes = currentEpisodes.map((episode) => {
        return <Episode {...episode} key={episode.id} />;
    });

    return (
        <>
            {" "}
            <Selector showsList={showsList} setEpisodesList={setEpisodesList} />
            <SearchInput
                updateSearch={setSearchInput}
                inputValue={searchInput}
            />
            <p>{`Displaying ${currentEpisodes.length} / ${episodesList.length} episodes`}</p>
            <div className="episode-container">{allEpisodes}</div>
            <Footer />
        </>
    );
}

export default App;
