import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectMethod() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Seleccione el método de pago" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="debito">Debito</SelectItem>
          <SelectItem value="efectivo">Efectivo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SelectMethod;
