import React from "react";
import "./Weather.css";

export default function Search() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="search-control"
              placeholder="Choose your location"
              id="enterCity"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="col-md-4 offset-2">
          <input type="submit" className="btn btn-primary" value="Search" />
          <input
            type="button"
            className="btn btn-transparent"
            value="Current"
          />
        </div>
      </div>
    </form>
  );
}
