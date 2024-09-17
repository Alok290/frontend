import "./Createtrip.css";

const Createtrip = () => {
  return (
    <div className="create__trip__container">
      <div className="create__trip__left">
        <h1>Create Trip</h1>
        <div className="demmo_video">
            
        </div>
      </div>
      <div className="create__trip__right">
        <div className="ongoing_trip">
          <h1>Ongoing Trips</h1>
        </div>
        <div className="listed__trip">
          <h1>Listed Trips</h1>
        </div>
      </div>
    </div>
  );
};

export default Createtrip;
