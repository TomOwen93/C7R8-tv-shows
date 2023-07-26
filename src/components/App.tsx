import "./App.css";
import { useEffect, useState } from "react";

// components
import EpisodeContainer from "./EpisodeContainer";
import ShowsContainer from "./ShowsContainer";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

// utils
import { Show, IEpisode, ShowInfo } from "../utils/Interfaces";

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [episodesList, setEpisodesList] = useState<IEpisode[]>([]);
    const [showsList, setShowsList] = useState<ShowInfo[]>([]);

    const fetchShows = async () => {
        const response = await fetch("https://api.tvmaze.com/shows?page=1");
        const jsonBody: Show[] = await response.json();
        const showInfo = jsonBody.map((show) => {
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
            {episodesList.length === 0 ? (
                <ShowsContainer
                    showsList={showsList}
                    searchInput={searchInput}
                    setEpisodesList={setEpisodesList}
                    setSearchInput={setSearchInput}
                />
            ) : (
                <EpisodeContainer
                    episodesList={episodesList}
                    searchInput={searchInput}
                    setEpisodesList={setEpisodesList}
                    setSearchInput={setSearchInput}
                />
            )}
            <Footer />
        </>
    );
}

export default App;
