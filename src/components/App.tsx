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
    const [selectedShowsEpisodes, setSelectedShowsEpisodes] = useState<
        IEpisode[]
    >([]);
    const [allShows, setAllShows] = useState<ShowInfo[]>([]);
    const [selectedEpisodeId, setSelectedEpisodeId] = useState("All");
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
        setAllShows([...showInfo]);
    };

    useEffect(() => {
        setSearchInput("");

        if (selectedShow !== "All") {
            setSelectedEpisodeId("All");
            fetchEpisodes(selectedShow);
        } else {
            setSelectedShowsEpisodes([]);
        }
    }, [selectedShow]);

    const fetchEpisodes = async (id: string) => {
        const response = await fetch(
            `https://api.tvmaze.com/shows/${id}/episodes`
        );
        const jsonbody = await response.json();
        setSelectedShowsEpisodes([...jsonbody]);
    };

    const showsToDisplay = (
        selectedShowsEpisodes.length > 0
            ? allShows
            : allShows.filter((show) =>
                  filterInput(show.name, show.summary, searchInput)
              )
    ).sort((a, b) => (a.name > b.name ? 1 : -1));

    const episodesToDisplay = selectedShowsEpisodes.filter((episode) =>
        filterInput(episode.name, episode.summary, searchInput)
    );

    const selectedEpisodeToDisplay = episodesToDisplay.filter((episode) =>
        filterSelect(selectedEpisodeId, episode.id.toString())
    );

    const handleEpisodeSelect = (selectedId: string) => {
        setSelectedEpisodeId(selectedId);
    };

    console.log(selectedEpisodeId);

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
                    optionList={showsToDisplay}
                    handleSelect={setSelectedShow}
                    selectedItemId={selectedShow}
                />
                {selectedShowsEpisodes.length > 0 && (
                    <Selector
                        optionList={episodesToDisplay}
                        handleSelect={handleEpisodeSelect}
                    />
                )}
            </div>
            {selectedShowsEpisodes.length === 0 ? (
                <ShowsContainer
                    showsToDisplay={showsToDisplay}
                    setSelectedShow={setSelectedShow}
                />
            ) : (
                <EpisodeContainer
                    episodesToDisplay={
                        selectedEpisodeToDisplay.length > 1
                            ? episodesToDisplay
                            : selectedEpisodeToDisplay
                    }
                    searchInput={searchInput}
                />
            )}
            <Footer selectedId={selectedShow} />
        </>
    );
}

export default App;
