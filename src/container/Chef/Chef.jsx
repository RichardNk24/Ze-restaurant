import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.cheffe} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">The thing I love most about cooking is being able to serve myself a meal that I love to eat. </p>
        </div>
        <p className="p__opensans"> In the past, this has meant being able to recreate my mom's favourite recipes cent per cent, without having to ask her or, as in my case, when I was studying abroad.</p>
      </div>

      <div className="app__chef-sign">
        <p>frichette Melange</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
