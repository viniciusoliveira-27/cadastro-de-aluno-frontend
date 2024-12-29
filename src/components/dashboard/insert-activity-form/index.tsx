'use client'

import { z } from "zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

enum Type {
    MANHA = "manha",
    TARDE = "tarde"
}
enum Serie {
    SERIE1 = "1º Serie",
    SERIE2 = "2º Serie",
    SERIE3 = "3º Serie",
    SERIE4 = "4º Serie",
    SERIE5 = "5º Serie",
    SERIE6 = "6º Serie",
    SERIE7 = "7º Serie",
    SERIE8 = "8º Serie",
    SERIE9 = "9º Serie",
    SERIE10 = "1º Ano Medio",
    SERIE11 = "2º Ano Medio",
    SERIE12 = "3º Ano Medio"
}

const insertFormSchema = z.object({
    nome: z.string({required_error: "Insira um Nome"}),
    serie: z.nativeEnum(Serie),
    escola: z.string({required_error: "Insira uma Escola"}),
    periodo: z.nativeEnum(Type),
    valor: z.coerce.number({required_error: "Insira um Valor"}).min(0.01, {message: "O valor precisa ser maior que zero"}),
    date: z.date({required_error: "Insira uma Data"})
})

type InsertFormType = z.infer<typeof insertFormSchema>;

export function InsertActivityForm() {

    const insertForm = useForm<InsertFormType>({
        resolver: zodResolver(insertFormSchema),
        defaultValues: {
            nome: "",
            serie: Serie.SERIE1,
            escola: "",
            periodo: Type.MANHA,
            //@ts-expect-error
            valor: "",
            date: new Date()

        }
    });

    async function onInsertFormSubmit(date: InsertFormType) {
        console.log(date);
    }
    return (
        <div>

            <Form {...insertForm}>
                <form onSubmit={insertForm.handleSubmit(onInsertFormSubmit)} className="flex  space-x-2 p-8">
                    <FormField
                        control={insertForm.control}
                        name="nome"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" className="w-max" placeholder="Insira o Nome do Aluno" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={insertForm.control}
                        name="serie"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-40">
                                                <SelectValue placeholder="Serie" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value={Serie.SERIE1}>1º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE2}>2º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE3}>3º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE4}>4º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE5}>5º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE6}>6º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE7}>7º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE8}>8º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE9}>9º Serie</SelectItem>
                                            <SelectItem value={Serie.SERIE10}>1º Ano Medio</SelectItem>
                                            <SelectItem value={Serie.SERIE11}>2º Ano Medio</SelectItem>
                                            <SelectItem value={Serie.SERIE12}>3º Ano Medio</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={insertForm.control}
                        name="escola"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" className="w-max" placeholder="Insira o Nome da Escola" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={insertForm.control}
                        name="periodo"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-40">
                                                <SelectValue placeholder="Periodo" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value={Type.MANHA}>Manhã</SelectItem>
                                            <SelectItem value={Type.TARDE}>Tarde</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={insertForm.control}
                        name="valor"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input type="number" className="w-max" placeholder="Valor" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={insertForm.control}
                        name="date"
                        render={({ field }) => {
                            return (
                                <FormItem className="w-max">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-max justify-start text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )
                        }}
                    />

                    <Button type="submit">Incluir</Button>
                </form>
            </Form>
        </div>

    );
}