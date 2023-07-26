interface SearchInputProps {
    updateSearch: React.Dispatch<React.SetStateAction<string>>;
    inputValue: string;
}

export default function SearchInput({
    updateSearch,
    inputValue,
}: SearchInputProps): JSX.Element {
    return (
        <div>
            <input
                value={inputValue}
                onChange={(event) => updateSearch(event.target.value)}
            ></input>
        </div>
    );
}
