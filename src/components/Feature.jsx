// @flow

import React from 'react';
import Img from 'gatsby-image';
import { DynamicTrans } from '../components/DynamicTrans';

export const Feature = ({
  title,
  description,
  imgProps,
  imgFirst = false
}: {
  title: string,
  description: string[],
  imgProps: Image,
  imgFirst?: boolean
}) => {
  return (
    <div className="container text-center py-4 py-lg-6 my-7">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-7 d-flex flex-column text-left">
          <h2 className="feature-title-decoration mb-3">
            <DynamicTrans>{title}</DynamicTrans>
          </h2>
          <ul className="p-0 list-style-none">
            {description.map((point, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={idx} className="feature-list-item-decoration mb-1">
                <DynamicTrans>{point}</DynamicTrans>
              </li>
            ))}
          </ul>
        </div>
        <div className={`col-12 col-md-5 py-3 px-2 px-md-4 ${imgFirst ? 'order-md-first' : ''}`}>
          <Img {...imgProps} />
        </div>
      </div>
    </div>
  );
};
