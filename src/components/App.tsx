import "./App.css";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Show } from "../utils/ShowInterface";
import EpisodeContainer from "./EpisodeContainer";
import ShowsContainer from "./ShowsContainer";

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
    image: { medium: string; original: string };
    summary: string;
    rating: { average: number | null };
    genres: string[];
    status: string;
    runtime: number;
}

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [episodesList, setEpisodesList] = useState<IEpisode[]>([]);
    const [showsList, setShowsList] = useState<ShowInfo[]>([]);

    const fetchShows = async () => {
        const response = await fetch("https://api.tvmaze.com/shows?page=1");
        const jsonbody: Show[] = await response.json();
        const showInfo = jsonbody.map((show) => {
            return {
                id: show.id,
                name: show.name,
                image: show.image,
                summary: show.summary,
                rating: show.rating,
                genres: show.genres,
                status: show.status,
                runtime: show.runtime,
            };
        });
        setShowsList([...showInfo]);
    };

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <>
            {" "}
            <SearchInput
                updateSearch={setSearchInput}
                inputValue={searchInput}
            />
            <ShowsContainer
                showsList={showsList}
                searchInput={searchInput}
                setEpisodesList={setEpisodesList}
            />
            <EpisodeContainer
                episodesList={episodesList}
                searchInput={searchInput}
            />
            <Footer />
        </>
    );
}

export default App;
