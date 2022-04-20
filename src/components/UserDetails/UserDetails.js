

const UserDetails = ({user}) => {
    const {name, username}=user;
    const userList = () =>{
        let content = [];
        let addressContent= [];
        let geoContent = [];
        let companyContent = []
        for (const userKey in user) {
            if (userKey==='address'){
                for (const addressKey in user[userKey]) {
                    if (addressKey === 'geo')
                        geoContent.push(<li>{addressKey}:{user[userKey][addressKey]}</li>)
                }
            }
        }
    }
            return (
        <div>
            <h3>{name}</h3>
            <h4>{username}</h4>
        </div>
    );
};

export {UserDetails};