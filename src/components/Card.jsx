import useProfile from "../hook/useProfile";

export default function Card() {

    const profile = useProfile()

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src={profile.avatar_url} alt="profile_pic" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {profile.name}

                    </h5>
                </a>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-ellipsis">
                    Username : {profile.login}
                    
                </h2>
                <br />
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">Repo Count: {profile.public_repos}</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
