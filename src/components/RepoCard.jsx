import StarIcon from "../assets/Star.svg"
import NestingIcon from "../assets/Nesting.svg"
import ChieldIcon from "../assets/Chield_alt.svg"
import "./RepoCard.css"
function RepoCard({repoData}){
    function timeAgo(dateString) {
        const now = new Date();
        const past = new Date(dateString);
        const seconds = Math.floor((now - past) / 1000);

        const intervals = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
        ];

        for (const interval of intervals) {
            const count = Math.floor(seconds / interval.seconds);
            if (count >= 1) {
            return `updated ${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
            }
        }

        return "updated just now";
        }
    return(
        <div className="repoCard">
            <h2 className="repoTitle">{repoData.name}</h2>
            <p className="repoDescription">{repoData.description}</p>
            <div className="extras">
                {repoData.license ? 
                    <span>
                        <img src={ChieldIcon} alt="" className=""/>
                        <p>{repoData.license}</p>
                    </span>:
                    null
                }
                <span>
                    <img src={NestingIcon} alt="" className=""/>
                    <p>{repoData.forks}</p>
                </span>

                <span>
                    <img src={StarIcon} alt="" className=""/>
                    <p>{repoData.watchers}</p>
                </span>

                <p id="lastUpdate">{timeAgo(repoData.last_update)}</p>
                
            </div>
        </div>
    )
}

export default RepoCard