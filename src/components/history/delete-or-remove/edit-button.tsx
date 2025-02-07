import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

export function EditButton() {
    return (
        <Button className="w-full hover:bg-white hover:text-black pr-8">
            <Edit/>
            Editar
        </Button>
    )
}