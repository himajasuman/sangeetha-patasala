import { Link } from "gatsby";
import React from "react";
import Veena from '../images/veena.js';

export default () => (
  <Link
    to="/"
    className="logoLink"
  >
    <Veena/>
    <span>సంగీత పాఠశాల</span>
  </Link>
);