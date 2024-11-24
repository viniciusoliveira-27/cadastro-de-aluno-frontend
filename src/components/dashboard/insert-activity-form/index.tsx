import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";


export function InsertActivityForm() {
    return (
        <div className="flex  space-x-2 p-8">
        <Input type="text" className="w-max" placeholder="nome" />
        <Select>
            <SelectTrigger className="w-40">
                <SelectValue placeholder="Serie" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="0">1º Serie</SelectItem>
                <SelectItem value="1">2º Serie</SelectItem>
                <SelectItem value="2">3º Serie</SelectItem>
                <SelectItem value="3">4º Serie</SelectItem>
                <SelectItem value="4">5º Serie</SelectItem>
                <SelectItem value="5">6º Serie</SelectItem>
                <SelectItem value="6">7º Serie</SelectItem>
                <SelectItem value="7">8º Serie</SelectItem>
                <SelectItem value="8">9º Serie</SelectItem>
                <SelectItem value="9">1º Ano medio</SelectItem>
                <SelectItem value="10">2º Ano medio</SelectItem>
                <SelectItem value="11">3º Ano medio</SelectItem>
            </SelectContent>
            </Select>
        <Input type="text" className="w-max" placeholder="escola" />
        <Select>
            <SelectTrigger className="w-40">
                <SelectValue placeholder="Periodo" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="0">Manhã</SelectItem>
                <SelectItem value="1">Tarde</SelectItem>
            </SelectContent>
            </Select>
        <Input type="number" className="w-max" placeholder="Valor do Pagamento" />
        <Input type="date" className="max-w-[10rem]" />


        <Button>Incluir</Button>

    </div>

    );
}