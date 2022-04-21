

const UserDetails = ({user}) => {
    // const {name, username}=user;
    // const {name, username,email,address:{street, suite, city, zipcode, geo: {lat,lng}},phone,website,company:{name:companyName, catchPhrase, bs}} = user;
    // const userList = () =>{
    //     let content = [];
    //     // let addressContent= [];
    //     // let geoContent = [];
    //     // let companyContent = []
    //     for (const userKey in user) {
    //         if (userKey==='address'){
    //             for (const addressKey in user[userKey]) {
    //                 content.push(<li>{addressKey}:{user[userKey][addressKey]}</li>)
    //                 if (addressKey === 'geo')
    //                     for (const geoKey in user[userKey][addressKey]) {
    //                         content.push(<li>{addressKey}:{user[userKey][addressKey][geoKey]}</li>)
    //                     }
    //             }
    //         } else if (userKey==='company'){
    //             for (const companyKey in user[userKey]){
    //                 content.push(<li>{companyKey}:{user[userKey][companyKey]}</li>)
    //             }
    //         } else {
    //             content.push(<li>{userKey}:{user[userKey]}</li>)
    //         }
    //     }
    //     // content.push(addressContent,geoContent,companyContent)
    //     return content
    // }

    const {company, address, name} = user
    const {geo} = address
            return (
        <div>

            {/*<h3>Name: {name}</h3>*/}
            {/*<h4>Username: {username}</h4>*/}
            {/*<ul>*/}
            {/*    <li>Email: {email}</li>*/}
            {/*    <ul>Address:*/}
            {/*        <li>Street: {street}</li>*/}
            {/*        <li>Suite: {suite}</li>*/}
            {/*        <li>City: {city}</li>*/}
            {/*        <li>Zipcode: {zipcode}</li>*/}
            {/*        <ul>Geo:*/}
            {/*            <li>Lat: {lat}</li>*/}
            {/*            <li>Lng: {lng}</li>*/}
            {/*        </ul>*/}
            {/*    </ul>*/}
            {/*    <li>Phone: {phone}</li>*/}
            {/*    <li>Website: {website}</li>*/}
            {/*    <ul>Company:*/}
            {/*        <li>Name: {companyName}</li>*/}
            {/*        <li>CatchPhrase: {catchPhrase}</li>*/}
            {/*        <li>Bs: {bs}</li>*/}
            {/*    </ul>*/}
            {/*</ul>*/}
            {/*const tifOptions = Object.keys(tifs).map(key =>*/}
            {/*<option value={key}>{tifs[key]}</option>*/}
            {/*)*/}

            <h4>{name}</h4>
            <ul>
                {Object.keys(user).map(key => (typeof(user[key])!== 'object' && <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {user[key]}</li>))}
            </ul>
            <ul>Address:
                {Object.keys(address).map(key => (typeof(address[key])!== 'object' && <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {address[key]}</li>))}
            </ul>
            <ul>Geo:
                {Object.keys(geo).map(key => <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:{key.charAt(0).toUpperCase() + key.slice(1)}: {geo[key]}</li>)}
            </ul>
            <ul>Company:
                {Object.keys(company).map(key => <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {company[key]}</li>)}
            </ul>
        </div>
    );
};

export {UserDetails};