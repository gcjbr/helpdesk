import Link from "next/link";

async function getTickets() {
    const response = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0
        }
    });
    return response.json();
}


export default async function TicketList(props) {
    const tickets = await getTickets();
    return (
        <>
            {tickets.map((ticket) => (
                <Link href={`/tickets/${ticket.id}`} key={ticket.id}>
                    <div key={ticket.id} className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body}</p>
                        <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
                    </div>
                </Link>
            ))}
            {tickets.length === 0 && <div className="text-center">No tickets found</div>}

        </>
    );
}