import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SingleNews from "./Feed/SingleNews";

const NewsFeed = () => {

    const fetchNews = async () => {
        const res = await axios.get("http://localhost:5000/api/news");
        return res.data;
    };

    const { data: news = [], isLoading, error } = useQuery({
        queryKey: ["news"],
        queryFn: fetchNews,
    });
    // console.log(news);

    return (
        <div className="px-4 ">
            <h1
                className="text-3xl font-extrabold text-[#0ff] tracking-wide textShadow">
                Your Futuristic Feed
            </h1>
            <div className=" mt-4 rounded-lg space-y-4 h-[69vh] overflow-y-auto hide-scrollbar">
                {isLoading && <p>Loading news...</p>}
                {error && <p>Error loading news: {error.message}</p>}
                {news.map((item) => (
                    <SingleNews key={item._id} newsItem={item} />
                ))}
            </div>

        </div>
    );
};

export default NewsFeed;