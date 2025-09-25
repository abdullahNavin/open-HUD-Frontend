import { CiBookmark } from "react-icons/ci";
import { GoBookmarkFill } from "react-icons/go";


const SingleNews = ({ newsItem }) => {
    const { _id, title, source, score, url } = newsItem;

    // console.log(source);

    const getSourceIcon = () => {
        switch (source) {
            case 'HackerNews':
                return (
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">HN</span>
                    </div>
                );
            case 'reddit':
                return (
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">r/</span>
                    </div>
                );
            case 'twitter':
                return (
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">𝕏</span>
                    </div>
                );
            case 'newsletter':
                return (
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-xs text-white">📧</span>
                    </div>
                );
            default:
                return (
                    <div className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center">
                        <span className="text-xs text-white">?</span>
                    </div>
                );
        }
    };

    const formatScore = () => {
        if (source === 'HackerNews') {
            return `${score} points`;
        } else if (source === 'reddit') {
            return `${score} upvotes`;
        } else if (source === 'twitter') {
            return `${score} likes`;
        }
        return null;
    };

    return (
        <div className='bg-[#141414a1] p-4 rounded-lg shadow-md shadow-[#028094]/30 hover:shadow-lg transition-shadow duration-300 ease-in-out flex justify-between items-start'>
            <div>
                <div>
                    <div className='flex items-center gap-2 mb-2'>
                        {getSourceIcon()}
                        <p className='text-gray-400'>{source}</p>
                        <span className='text-sm text-gray-400'>{formatScore()}</span>
                    </div>
                </div>
                <a href={url} target='_blank' className='text-[#0ff] text-xl hover:text-[#2cc5c5] duration-300 ease-in-out'>{title}</a>
            </div>
            <div className=" cursor-pointer text-xl group w-fit h-fit">
                {/* Outline icon (default) */}
                <CiBookmark className="text-gray-300 group-hover:hidden" />

                <GoBookmarkFill className="hidden text-[#0ff] group-hover:block " />
            </div>
        </div>
    );
};

export default SingleNews;