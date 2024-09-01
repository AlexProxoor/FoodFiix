import { ChangeEvent } from "react";
import { diets, dishtypes } from "constans";
import { FilterContainer, StyledSelect, StyledOption } from "./styled";
import { FilterProps } from "constans/types/filterTypes";

const Filter: React.FC<FilterProps> = ({
  selectedDiet,
  setSelectedDiet,
  selectDishType,
  setSelectDishType,
}) => {
  const handleDietChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDiet(e.target.value);
  };

  const handleDishTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectDishType(e.target.value);
  };

  return (
    <FilterContainer>
      <StyledSelect value={selectedDiet} onChange={handleDietChange}>
        <StyledOption value="">All Diets</StyledOption>
        {diets.map((diet) => (
          <StyledOption key={diet} value={diet}>
            {diet}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledSelect value={selectDishType} onChange={handleDishTypeChange}>
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
