export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel: WebChannel;
    dvdCountry: string | null;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
}

export interface Schedule {
    time: string;
    days: string[];
}

export interface Rating {
    average: number | null;
}

export interface Network {
    id: number;
    name: string;
    country: Country;
    officialSite: string | null;
}

export interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface WebChannel {
    id: number;
    name: string;
    country: Country2;
    officialSite: string;
}

export interface Country2 {
    name: string;
    code: string;
    timezone: string;
}

export interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
}

export interface Image {
    medium: string;
    original: string;
}

export interface Links {
    self: Self;
    previousepisode: Previousepisode;
}

export interface Self {
    href: string;
}

export interface Previousepisode {
    href: string;
}

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
