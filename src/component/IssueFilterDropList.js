import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export const IssueFilterDropList = ({ filterLabel, data, handleFilterValue, filterType, value }) => (
  <div>
    <SelectField
      floatingLabelText={filterLabel}
      value={value}
      onChange={(event, index, value) => {
        handleFilterValue(filterType, value);
      }}
      underlineStyle={{ display: 'none' }}
      labelStyle={{ color: 'white' }}
      floatingLabelStyle={{ color: '#B3E5FC' }}
    >
      {
        data.map((elem, index) => (
          <MenuItem key={index} value={elem.value} primaryText={elem.label}/>
        ))
      }
    </SelectField>
  </div>
);
