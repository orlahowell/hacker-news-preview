import "../scss/Story.scss";

const StoryDisplay = () => {
    return (
        <div className="storyBox">
            <div className="storyBox__skeleton-image skeleton" />
            <div className="storyBox__skeleton-subtitle">
                <div className="skeleton" />
                <div className="skeleton" />
            </div>
            <div className="storyBox__skeleton-title">
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
            </div>
            <div className="storyBox__skeleton-subtitle">
                <div className="skeleton" />
            </div>
        </div>
    );
};

export default StoryDisplay;
