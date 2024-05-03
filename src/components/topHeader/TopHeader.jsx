import React from 'react';

const TopHeader = ({title,textAlign}) => {
  return (
    <>
     <h3 className="topHeader" style={textAlign ?? {textAlign:"center"}}>{title}</h3> 
    </>
  );
};

export default TopHeader;