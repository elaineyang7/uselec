import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StepDescription = ( {id, desc} ) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const Comment = desc;
  const array = Comment.split('<br />');

  return (
    <div 
      className="description"
      data-aos="zoom-in"
      data-aos-duration="1000" 
      data-aos-once="true"
    >
        <p key={id}>
          {array.map((comment, index) => 
            <React.Fragment
              key={index}
            >
              {comment}<br/>
            </React.Fragment>
          )}
        </p>
    </div>
  );
}

export default StepDescription;