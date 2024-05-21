import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const expenseOptions = {
  estado: ["pendiente", "atrasado", "pagado"],
  categoria: ["salud", "supermercado", "electronica", "servicios"],
  metodo: ["credito", "debito", "efectivo"],
};

interface SelectButtonProps {
  buttonValue: keyof typeof expenseOptions;
  onSelectChange: (values: Record<string, string>) => void;
  selectedValues: Record<string, string>;
}

function SelectButton({
  buttonValue,
  onSelectChange,
  selectedValues,
}: SelectButtonProps) {
  const options = expenseOptions[buttonValue];
  return (
    <Select
      onValueChange={(value) => {
        onSelectChange({ ...selectedValues, [buttonValue]: value });
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecciona una opción" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((value) => (
            <SelectItem key={value} value={value}>
              {value.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SelectButton;
