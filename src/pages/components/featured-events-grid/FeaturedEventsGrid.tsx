import React from 'react';
import { FeaturedGridWrapper, FeaturedRow, FeaturedClass } from './FeaturedEventsGrid.css';

const FeaturedEventsGrid = () => (
  <FeaturedGridWrapper>
    <FeaturedRow>
      <FeaturedClass bgColor={'#016884'} large />
    </FeaturedRow>
    <FeaturedRow>
      <FeaturedClass bgColor={'#f37a6b'} small>
        <h2>Couples</h2>
      </FeaturedClass>
      <FeaturedClass bgColor={'#43cdcd'} medium>
        <h2>Family Friendly</h2>
      </FeaturedClass>
    </FeaturedRow>
  </FeaturedGridWrapper>
);

export default FeaturedEventsGrid;

// the quick brown fox jumped over the leazy dog
// dfaefeawerfwefa

// the quick brown fox jumped over the lazy dog
// the quick brown fox jumped over the lazy dog
// the quick brown fox jumped over the lazy dog

// the quick brown fox jumped over the lazy dog
