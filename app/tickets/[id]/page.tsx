interface Ticket {
  id: string;
  body: string;
  priority: string;
}

interface Params {
  id: string;
  title: string;
}

interface TicketDetailsProps {
  params: Params;
}

async function getTicket(id: string): Promise<Ticket> {
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  return res.json();
}

export default async function TicketDetails({ params }: TicketDetailsProps) {
  const { id, title } = params;
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket details</h2>
      </nav>

      <div>
        <div className="card">
          <h3>{params.title}</h3>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
        </div>
      </div>
    </main>
  );
}
