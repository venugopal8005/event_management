function showStoredData() {
    const bookingData = localStorage.getItem('bookingData');
    if (bookingData) {
        const data = JSON.parse(bookingData);
        document.getElementById('storedDataContainer').innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Phone: ${data.phone}</p>
            <p>Email: ${data.email}</p>
            <p>Event: ${data.event}</p>
            <p>Event Date: ${data.eventDate}</p>
        `;
    } else {
        document.getElementById('storedDataContainer').innerHTML = '<p>No booking data found.</p>';
    }
}