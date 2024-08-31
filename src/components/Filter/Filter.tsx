import React from "react";
import { diets, dishtypes } from "constans/constans";
import { FilterContainer, StyledSelect, StyledOption } from "./styled";
import { FilterProps } from "constans/types/filterTypes";

const Filter: React.FC<FilterProps> = ({
  selectedDiet,
  setSelectedDiet,
  selectDishType,
  setSelectDishType,
}) => {
  return (
    <FilterContainer>
      <StyledSelect
        value={selectedDiet}
        onChange={(e) => setSelectedDiet(e.target.value)}
      >
        <StyledOption value="">All Diets</StyledOption>
        {diets.map((diet) => (
          <StyledOption key={diet} value={diet}>
            {diet}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledSelect
        value={selectDishType}
        onChange={(e) => setSelectDishType(e.target.value)}
      >
        <StyledOption value="">All Dish Types</StyledOption>
        {dishtypes.map((dishtype) => (
          <StyledOption key={dishtype} value={dishtype}>
            {dishtype}
          </StyledOption>
        ))}
      </StyledSelect>
    </FilterContainer>
  );
};

export default Filter;
