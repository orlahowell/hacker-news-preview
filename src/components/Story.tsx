import React, { useState, useEffect } from "react";
import { Item, User, HackerNewsService } from "../services/HackerNewsService";
import StoryDisplay from "./StoryDisplay";
import StorySkeleton from "./StorySkeleton";

interface StoryProps {
    storyId: number;
}

const Story = (props: StoryProps) => {
    const [story, setStory] = useState<Item | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const { storyId } = props;

    useEffect(() => {
        if (story === null) {
            HackerNewsService.getItem(storyId)
                .then((res) => setStory(res))
                .catch((err) => console.log("story fetch failed"));
        }
    }, [story, storyId]);

    useEffect(() => {
        if (story !== null && user === null) {
            HackerNewsService.getUser(story.by)
                .then((res) => setUser(res))
                .catch((err) => console.log("user fetch failed"));
        }
    }, [user, story]);

    return (
        <>
            {story && user ? (
                <StoryDisplay story={story} user={user} />
            ) : (
                <StorySkeleton />
            )}
        </>
    );
};

export default Story;
