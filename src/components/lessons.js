import React from "react";
import { saraliswaralu } from '../data/index';

export default (props) => (
  <div className="telugu" {...props}>
    <p className="heading">సరళీ స్వరములు</p>
    <ol>
      {
        saraliswaralu.map((swaram, index) => {
          return (
            <li key={`key${index}`}>
              {/* <span className="list-number">{index+1}</span> */}
              <div>
                {swaram.map((swaramLine) => (
                  <p>{swaramLine}</p>
                ))}
              </div>
            </li>
          )
        })
      }
    </ol>
  </div>
)