import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, Trash } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"sm"}>
              <Search className="h-3 w-3" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <div className="flex flex-col gap-4">
              <div>
                <SheetTitle>
                  Editar Produto:{" "}
                  <span className="ml-2 text-xs text-muted-foreground">{`${"s2setmchi719oyseuyoo3ndp"}`}</span>
                </SheetTitle>
                <SheetDescription>
                  Aqui você poderá editar seu produto
                </SheetDescription>
              </div>

              <div>
                <Input type="text" placeholder="Nome do produto" />
                <div className="flex gap-2 mt-2">
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="pizzas">Pizzas</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input type="text" placeholder="Preço" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </TableCell>

      <TableCell className="font-mono text-xs font-semibold">
        s2setmchi719oyseuyoo3ndp
      </TableCell>
      <TableCell className="font-medium">Pizza de Calabresa</TableCell>
      <TableCell className="font-medium">Pizza</TableCell>
      <TableCell className="font-medium">R$ 29,90</TableCell>
      <TableCell className="font-medium">
        <Switch className="data-[state=checked]:bg-emerald-500" />
      </TableCell>
      <TableCell>
        <Button size={"sm"}>
          <Trash className="h-3 w-3" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
