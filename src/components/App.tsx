import "./App.css";
import { useEffect, useState } from "react";

// components
import EpisodeContainer from "./EpisodeContainer";
import ShowsContainer from "./ShowsContainer";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import Selector from "./Selector";

// utils
import { Show, IEpisode, ShowInfo } from "../utils/Interfaces";
import { filterInput, filterSelect } from "../utils/filterinput";

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [episodesList, setEpisodesList] = useState<IEpisode[]>([]);
    const [showsList, setShowsList] = useState<ShowInfo[]>([]);
    const [selectedEpisode, setSelectedEpisode] = useState("All");
    const [selectedShow, setSelectedShow] = useState("All");

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
        setSearchInput("");

        if (selectedShow !== "All") {
            setSelectedEpisode("All");
            fetchEpisodes(selectedShow);
        } else {
            setEpisodesList([]);
        }
    }, [selectedShow]);

    const fetchEpisodes = async (id: string) => {
        const response = await fetch(
            `https://api.tvmaze.com/shows/${id}/episodes`
        );
        const jsonbody = await response.json();
        setEpisodesList([...jsonbody]);
    };

    const currentShows = (
        episodesList.length > 0
            ? showsList
            : showsList.filter((show) =>
                  filterInput(show.name, show.summary, searchInput)
              )
    ).sort((a, b) => (a.name > b.name ? 1 : -1));

    const filteredBySearch = episodesList.filter((episode) =>
        filterInput(episode.name, episode.summary, searchInput)
    );

    const filteredBySelection = filteredBySearch.filter((episode) =>
        filterSelect(selectedEpisode, episode.id.toString())
    );

    const handleEpisodeSelect = (selectedId: string) => {
        setSelectedEpisode(selectedId);
    };

    console.log(selectedEpisode);

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <>
            <div className="header">
                <h1>TV Show Selector</h1>
                <SearchInput
                    updateSearch={setSearchInput}
                    inputValue={searchInput}
                />
                <Selector
                    optionList={currentShows}
                    handleSelect={setSelectedShow}
                    selectedItemId={selectedShow}
                />
                {episodesList.length > 0 && (
                    <Selector
                        optionList={filteredBySearch}
                        handleSelect={handleEpisodeSelect}
                    />
                )}
            </div>
            {episodesList.length === 0 ? (
                <ShowsContainer
                    currentShows={currentShows}
                    setSelectedShow={setSelectedShow}
                />
            ) : (
                <EpisodeContainer
                    episodesList={filteredBySelection}
                    searchInput={searchInput}
                />
            )}
            <Footer />
        </>
    );
}

export default App;
