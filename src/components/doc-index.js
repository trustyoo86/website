import React from 'react';

export default function DocIndex(props) {
  let { index } = props;

  index.sort((a, b) => {
    if (a.index && !b.index) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <ul>
      {index.map((v, i) => {
        return (
          <li key={i}>
            {v.index ? (
              <>
                <h3>{v.title}</h3>
                <DocIndex index={v.index} />
              </>
            ) : (
              <a href={v.path}>{v.title}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
