import { Item } from "../services/HackerNewsService";

interface StoryDisplayProps {
    story: Item;
}

const StoryDisplay = (props: StoryDisplayProps) => {
    const { story } = props;

    return (
        <div>
            <h3>{story.title}</h3>
            <p>{story.url}</p>
            <p>{story.time}</p>
            <p>{story.score}</p>
            <p>
                <b>{story.by}</b>
            </p>
        </div>
    );
};

export default StoryDisplay;
