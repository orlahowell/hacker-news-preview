import { Item, User } from "../services/HackerNewsService";
import "../scss/Story.scss";

interface StoryDisplayProps {
    story: Item;
    user: User;
}

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
                    <b>{story.score} </b>
                    <a href={story.url}>&#x1F30D;</a>
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
        </div>
    );
};

export default StoryDisplay;
