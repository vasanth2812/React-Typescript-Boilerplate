import React, { FC } from "react";
import { Button } from "reactstrap";

import "./HomePage.scss";

const HomePage: FC = () => (
  <>
    <div className="container">
      <div className="col-sm-12 col-md-6 col-lg-6 txt">Home Page</div>
      <Button color="danger">Submit</Button>
    </div>
  </>
);

export default HomePage;
