import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Trash } from "lucide-react";

export function Products() {
  return (
    <>
      <Helmet title="Cardápio" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Cardápio</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Produto</CardTitle>
                <CardDescription>
                  Preencha os campos para adiconar um novo produto
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Input id="name" placeholder="Nome do Produto" />
                <div className="grid grid-cols-2 gap-2">
                  <Input id="price" placeholder="Preço" />
                  <Select>
                    <SelectTrigger className="text-muted-foreground">
                      <SelectValue placeholder="Categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pizza">Pizzas</SelectItem>
                      <SelectItem value="drinks">Bebidas</SelectItem>
                      <SelectItem value="dessert">Sobremesas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Switch className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-rose-600" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Status do produto</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button variant={"success"}>Adicionar</Button>
              </CardFooter>
            </Card>
            {"adicionar dropdown menu pra teste"}
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Categoria</CardTitle>
                <CardDescription>
                  Preencha os campos para adiconar uma nova categoria
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Input id="name" placeholder="Nome da Categoria" />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant={"success"}>Adicionar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* <div className="space-y-2.5">
          <Button variant={"outline"}>
            <Plus className="h-4 w-4" />
            Adicionar produto
          </Button>


          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px] "></TableHead>
                  <TableHead className="w-[140px] ">Código</TableHead>
                  <TableHead>Nome do Produto</TableHead>
                  <TableHead className="w-[180px] ">Categoria</TableHead>
                  <TableHead className="w-[140px] ">Preço</TableHead>
                  <TableHead className="w-[132px] ">Disponível</TableHead>
                  <TableHead className="w-[64px] "></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => {
                  return <ProductTableRow key={index} />;
                })}
              </TableBody>
            </Table>
          </div>
        </div> */}
      </div>
    </>
  );
}
