import { ExpandMore, ExpandLess } from "@styled-icons/material";

type ExpandIconProps = {
  isExpanded: boolean,
  handleClick: () => void,
}


const ExpandIcon = ({ isExpanded, handleClick }: ExpandIconProps) => (
  <>
  {
    isExpanded ? 
      <ExpandLess onClick={handleClick} /> : 
      <ExpandMore onClick={handleClick} />
  }
  </>
);

export default ExpandIcon;