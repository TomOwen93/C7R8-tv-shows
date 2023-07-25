import "./App.css";
import SearchInput from "./SearchInput";
import episodes from "../episodes.json";
import { Episode } from "./Episode";
import Footer from "./Footer";
import { useState } from "react";
import filterInput from "../utils/filterinput";

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

function App() {
    const [searchInput, setSearchInput] = useState("");

    const currentEpisodes = episodes.filter((episode) =>
        filterInput(episode.name, episode.summary, searchInput)
    );

    const allEpisodes = currentEpisodes.map((episode) => {
        return <Episode {...episode} key={episode.id} />;
    });

    return (
        <>
            {" "}
            <SearchInput
                updateSearch={setSearchInput}
                inputValue={searchInput}
            />
            <p>{`Displaying ${currentEpisodes.length} / ${episodes.length} episodes`}</p>
            <div className="episode-container">{allEpisodes}</div>
            <Footer />
        </>
    );
}

export default App;
