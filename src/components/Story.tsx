import React, { useState, useEffect } from "react";
import { Item, HackerNewsService } from "../services/HackerNewsService";
import StoryDisplay from "./StoryDisplay";

interface StoryProps {
    storyId: number;
}

const Story = (props: StoryProps) => {
    const [story, setStory] = useState<Item | null>(null);
    const { storyId } = props;

    useEffect(() => {
        if (story === null) {
            HackerNewsService.getItem(storyId)
                .then((res) => setStory(res))
                .catch((err) => console.log("story fetch failed"));
        }
    }, [story, storyId]);

    return (
        <>
            {story ? (
                <StoryDisplay story={story}></StoryDisplay>
            ) : (
                <p>Loading</p>
            )}
        </>
    );
};

export default Story;
