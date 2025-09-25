import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import SingleNews from "./Feed/SingleNews";

const NewsFeed = () => {
    const containerRef = useRef(null);

    const fetchNews = async () => {
        const res = await axios.get("http://localhost:5000/api/news");
        return res.data;
    };

    const { data: news = [], isLoading, error } = useQuery({
        queryKey: ["news"],
        queryFn: fetchNews,
    });

    // Auto-scroll logic
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let scrollInterval = setInterval(() => {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                container.scrollTop = 0; // loop back to top
            } else {
                container.scrollTop += 1; // scroll speed (px)
            }
        }, 50); 

        // Pause when user hovers
        container.addEventListener("mouseenter", () => clearInterval(scrollInterval));
        container.addEventListener("mouseleave", () => {
            scrollInterval = setInterval(() => {
                if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                    container.scrollTop = 0;
                } else {
                    container.scrollTop += 1;
                }
            }, 50);
        });

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="px-4">
            <h1 className="text-3xl font-extrabold text-[#0ff] tracking-wide textShadow">
                Your Futuristic Feed
            </h1>
            <div
                ref={containerRef}
                className="mt-4 rounded-lg space-y-4 h-[69vh] overflow-y-auto hide-scrollbar"
            >
                {isLoading && <p className="text-[#0ff] text-center">Loading news...</p>}
                {error && <p>Error loading news: {error.message}</p>}
                {news.map((item) => (
                    <SingleNews key={item._id} newsItem={item} />
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;
