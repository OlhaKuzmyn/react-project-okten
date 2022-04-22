const UserDetails = ({user}) => {
    const {company, address, name} = user
    const {geo} = address
    return (
        <div>
            <h4>{name}</h4>
            <ul>
                {Object.keys(user).map(key => (typeof(user[key])!== 'object' && <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {user[key]}</li>))}
                <ul>Address:
                    {Object.keys(address).map(key => (typeof(address[key])!== 'object' && <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {address[key]}</li>))}
                    <ul>Geo:
                        {Object.keys(geo).map(key => <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {geo[key]}</li>)}
                    </ul>
                </ul>
                <ul>Company:
                    {Object.keys(company).map(key => <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {company[key]}</li>)}
                </ul>
            </ul>
        </div>
    );
};

export {UserDetails};