import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ipsam
        distinctio iure, itaque fugit hic laudantium, autem ea voluptates
        obcaecati unde consequatur quae maxime corrupti doloremque maiores quasi
        quidem delectus!
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View tickets</button>
        </Link>
      </div>
      <h2>Updates</h2>
      <div className="card">
        <h3>New feature</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ipsam
          distinctio iure, itaque fugit hic laudantium, autem ea voluptates
          obcaecati unde consequatur quae maxime corrupti doloremque maiores
          quasi quidem delectus!
        </p>
      </div>
    </main>
  );
}
