import { FormGroup } from "@/examples/components/form/form-group";
import { FormRoot } from "@/examples/components/form/form-root";
import { Input } from "@/examples/components/input";
import { Label } from "@/examples/components/label";

export default function Home() {
  return (
    <section className="bg-gray-300 min-h-screen flex justify-center items-center">
      <FormRoot className="bg-white p-8 rounded-lg shadow-lg min-w-96">
        <FormGroup>
          <Label variant="primary" text="Nome" htmlFor="name" />
          <Input id="name" variant="outline" placeholder="Digite seu nome" />
        </FormGroup>
      </FormRoot>
    </section>
  );
}
