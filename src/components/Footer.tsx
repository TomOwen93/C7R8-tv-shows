interface FooterProps {
    selectedId: string;
}

export default function Footer({ selectedId }: FooterProps): JSX.Element {
    return (
        <p className="footer">
            Sourced from{" "}
            <a
                href={
                    selectedId === "All"
                        ? `https://api.tvmaze.com/shows?page=1`
                        : `https://api.tvmaze.com/shows/${selectedId}`
                }
            >
                TVmaze
            </a>
        </p>
    );
}
