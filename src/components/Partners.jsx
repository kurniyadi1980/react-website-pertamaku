import "../styles/Partners.css";
function Partners(props) {
  return (
    <div className="partner-list">
      {props.partnersList.map((list, index) => {
        return (
          <div className="kartu-partner" key={index}>
            <img src={list.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Partners;
