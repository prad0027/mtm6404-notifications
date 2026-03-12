import { useState } from "react"
import notificationsData from "./notification"
import "./App.css"

function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      {children}
    </div>
  )
}

function App() {

  const [notifications, setNotifications] = useState(notificationsData)

  function clearNotification(id) {
    const updated = notifications.filter(n => n.id !== id)
    setNotifications(updated)
  }

  function clearAll() {
    setNotifications([])
  }

  return (
    <div>

      <h1>Notifications</h1>

      <h2>{notifications.length} Notifications</h2>

      <button onClick={clearAll}>Clear All</button>

      {notifications.map(notification => (
        <Card key={notification.id}>

          <h3>{notification.name}</h3>

          <p>{notification.message}</p>

          <button onClick={() => clearNotification(notification.id)}>
            Clear
          </button>

        </Card>
      ))}

    </div>
  )
}

export default App