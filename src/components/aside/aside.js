import React from 'react';
import Form from '../form/form';
import News from '../news/news';

import './aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <Form />
      <News />
    </aside>
  );
};

export default Aside;


