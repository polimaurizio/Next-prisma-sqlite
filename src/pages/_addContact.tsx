import React from "react";

export default function NewContact() {
    return (
        <div>
            <h1>New Contact</h1>
            <form action='/api/contact' method='POST'>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
