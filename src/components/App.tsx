import "./App.css";
import episodes from "../episodes.json";
import { Episode } from "./Episode";
console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

export interface IEpisode {
    id: number;
    url?: string;
    name: string;
    season: number;
    number: number;
    type?: string;
    airdate?: string;
    airtime?: string;
    airstamp?: string;
    rating?: { average: number };
    runtime?: number;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    _links?: { self: { href: string } };
}

function App() {
    const allEpisodes = episodes.map((episode) => {
        return <Episode {...episode} key={episode.id} />;
    });

    return <div className="episode-container">{allEpisodes}</div>;
}

export default App;
