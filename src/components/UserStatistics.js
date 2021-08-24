
const UserStatistics = () => {

    return(
        <div className="user-statistics">
            <div className="user-profile-img">
                <img src="./images/my-image.jpg" alt="user image" />
            </div>
            <div className="statistics">
                <div className="statistic">
                    <a href="#">I have read 20 books</a>
                </div>
                <div className="statistic">
                    <a href="#">I am reading 2 books</a>
                </div>
                <div className="statistic">
                    <a href="#">Suggest me a book</a>
                </div>
            </div>
        </div>
    )

}


export default UserStatistics;
