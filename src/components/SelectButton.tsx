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
}

function SelectButton({ buttonValue }: SelectButtonProps) {
  const options = expenseOptions[buttonValue];

  return (
    <Select>
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
