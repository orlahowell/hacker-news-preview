import { Item, User } from "../services/HackerNewsService";
import "../scss/StoryDisplay.scss";

interface StoryDisplayProps {
    story: Item;
    user: User;
}

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

const StoryDisplay = (props: StoryDisplayProps) => {
    const { story, user } = props;
    const date = new Date(story.time * 1000);

    return (
        <div className="storyBox">
            <div className="storyBox__image" />
            <div className="storyBox__subtitle">
                <p>
                    <b>{date.toLocaleDateString()} </b>
                    {date.toLocaleTimeString()}
                </p>
                <p>
                    <b>{story.score}</b>
                </p>
            </div>
            <div className="storyBox__text">
                <h2>{story.title}</h2>
            </div>
            <div className="storyBox__subtitle">
                <p>
                    <b>{story.by} </b>
                    {user.karma}
                </p>
            </div>
            <div className="storyBox__text">
                <a href={story.url}>&#x1F30D;</a>
            </div>
        </div>
    );
};

export default StoryDisplay;
