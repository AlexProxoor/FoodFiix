export interface FilterProps {
  selectedDiet: string;
  selectDishType: string;
  setSelectedDiet: (diet: string) => void;
  setSelectDishType: (dishtype: string) => void;
}
