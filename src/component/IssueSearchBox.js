import React from "react";
import TextField from "material-ui/TextField";

export const IssueSearchBox = ({ filterLabel, handleFilterValue, filterType, value, hintText }) => (
  <TextField
    hintText={hintText}
    defaultValue = {value}
    onChange={(event) => {
      handleFilterValue(filterType, encodeURI(event.target.value.trim()));
    }}
    floatingLabelText={filterLabel}
    floatingLabelStyle={{ color:'#B3E5FC' }}
    floatingLabelFocusStyle={{ color:'#B3E5FC' }}
    floatingLabelFixed={true}
    hintStyle={{ color:'#B3E5FC' }}
    inputStyle={{ color:'white' }}
    underlineStyle={{ bottom: '12px', borderBottom:'1px solid #B3E5FC' }}
    underlineFocusStyle={{ borderBottom:'1px solid rgb(255, 255, 255)' }}
  />
);
