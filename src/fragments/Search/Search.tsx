import React, { useState } from 'react';

export default (props: { submit: (text: String) => any }) => {
  const [text, setText] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (text) {
      props.submit(text);
      setText('');
    }
  };

  return (
    <form
      className="uk-search uk-search-default uk-width-3-1"
      onSubmit={onSubmit}
    >
      <button type="submit" uk-search-icon="true"></button>
      <input
        className="uk-search-input"
        type="search"
        placeholder="Пошук ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};
