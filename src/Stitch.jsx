// get type from props?

const Stitch = (props) => {
    return (
        <div className="stitch">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Stitch;
