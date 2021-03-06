import React from 'react';
import Story from './components/Story/Story';


export default {
  addWithIntl(name, story, translations, options = {}) {
    this.add(name, ctx => {
      const render = () => story(ctx);

      return (
        <Story render={render} translations={translations} {...options} />
      );
    });
  }
};
