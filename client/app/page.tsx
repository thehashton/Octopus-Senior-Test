import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <Link href={"/products"} style={{ fontSize: "1.2rem", color: "white" }}>
          <Button>Go to the Products Page</Button>
        </Link>
      </div>
    </main>
  );
}
