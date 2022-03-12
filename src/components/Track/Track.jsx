import "./Track.css";

const Track = (props) => {
  const isRemoval = false;
  const renderAction = () => {
    return <button className="Track-action">{isRemoval ? "+" : "-"}</button>;
  };
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
