import { FormGroup } from "@/examples/atoms/form-group.atom";
import { Input } from "@/examples/atoms/input.atom";

export default function Home() {
  return (
    <section className="bg-white min-h-screen flex justify-center items-center">
      <FormGroup>
        <Input variant="primary" placeholder="Digite seu nome" />
        <Input variant="secondary" placeholder="Digite seu nome" />
      </FormGroup>
    </section>
  );
}
