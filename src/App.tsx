import { useEffect, useState } from "react";
import "./App.scss";
import { HackerNewsService } from "./services/HackerNewsService";
import Story from "./components/Story";

function App() {
    const [topStories, setTopStories] = useState<number[] | null>(null);

    useEffect(() => {
        if (topStories === null) {
            HackerNewsService.getTopStories(10)
                .then((res) => setTopStories(res))
                .catch((err) => console.log("top stories fetch failed"));
        }
    }, [topStories]);

    return (
        <div className="app">
            <div className="app__title">
                <h1>Hacker News</h1>
            </div>
            <div className="stories-container">
                {topStories ? (
                    topStories.map((storyId) => <Story storyId={storyId} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default App;
