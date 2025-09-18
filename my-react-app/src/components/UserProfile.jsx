function UserProfile(props) {
    const { name, age, location } = props;
    return (
        <div className="user-profile">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {Location}</p>
        </div>
    );
}
export default UserProfile; 