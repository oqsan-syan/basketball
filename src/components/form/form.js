import React from  'react';

import './form.scss';

const Form = () => {
  return (
    <div className="form">
      <h3 className="form__title">
        Оформить подписку<br></br><span>на бесплатные прогнозы</span>
      </h3>
      <form>
        <div className="form__input-wrapper">
          <input type="email" className="form__input" placeholder="Ваш e-mail..."></input>
          <div className="form__ok">ок</div>
        </div>
      </form>
    </div>
  );
};

export default Form;

