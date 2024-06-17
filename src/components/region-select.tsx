import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const RegionSelect = () => {
  const regionsArray: { value: string; title: string }[] = [
    {
      value: "africa",
      title: "Africa",
    },
    {
      value: "america",
      title: "America",
    },
    {
      value: "asia",
      title: "Asia",
    },
    {
      value: "europe",
      title: "Europe",
    },
    {
      value: "oceania",
      title: "Oceania",
    },
  ];

  return (
    <Select>
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
