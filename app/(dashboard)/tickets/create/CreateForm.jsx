"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateForm() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [priority, setPriority] = useState("low");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const ticket = {
            title,
            body,
            priority,
            user_email: "hardcoded@for.now"
        };

        const response = await fetch("http://localhost:4000/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ticket),
        });
    
        if (response.status === 201) {
            router.refresh();
            router.push("/tickets");
        }
    
        setIsLoading(false);
    };

  return (
    <form className="w-1/2" onSubmit={(e) => handleSubmit(e)}>
        <label>
            <span>Title</span>
            <input 
                required
                type="text"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
        </label>
        <label>
            <span>Body</span>
            <textarea 
                required
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                />
        </label>
        <label>
            <span>Priority</span>
            <select 
                required
                value={priority} 
                onChange={(e) => setPriority(e.target.value)} 
                >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </label>

        <button 
            className="btn-primary"            
            type="submit" 
            disabled={isLoading}
            >
                {isLoading ? "Creating..." : "Create"}
        </button>
    </form>
  );
}