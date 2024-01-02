import React from "react";

function Card() {
  return (
    <div>
      {" "}
      <div>
        <div
          className="card mt-3"
          style={{ width: "16rem", maxHeight: "360px" }}
        >
          <img
            src="https://media.istockphoto.com/id/629423010/photo/chilli-paneer-tikka-or-paneer-kabab.jpg?s=1024x1024&w=is&k=20&c=0DUhYqlFJYETQk7b0X04NpL9MHXSjwiacfvN8qrJAqI="
            className="card-img-top"
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">This is some random text.</p>
            <div className="container w-100">
              <select
                className="m-2 h-100 w-20 bg-primary text-white rounded"
                style={{ select: "#FF0000" }}
               
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-primary rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
