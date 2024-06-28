import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const RegionSelect = ({
  regionsArray,
  currentRegion,
  setCurrentRegion,
}: {
  regionsArray: { value: string; title: string }[];
  currentRegion: string;
  setCurrentRegion: (region: string) => void;
}) => {
  console.log(currentRegion);

  return (
    <Select
      onValueChange={(selectValue: string) => {
        setCurrentRegion(selectValue);
      }}
      value={currentRegion}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Filter by region" />
      </SelectTrigger>
      <SelectContent>
        {regionsArray.map(({ value, title }) => (
          <SelectItem key={value} value={value}>
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
