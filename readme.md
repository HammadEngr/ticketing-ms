# Ticketing App

### Services

1. Auth
   - Everything related to user signup/signin/signout
2. Tickets
   - Ticket creation/editing, Knows whether a ticket can be updated or not.
3. Orders
   - Order creation/editing
4. Expiration
   - Watches for orders to be created, cancels them after 15 minutes.
5. Payments
   - Handles credit card payments. Cancels orders if payment is failed and viceversa

### List of Evenets

1. UserCreated
2. UserUpdated
3. OrderCreated
4. OrderCancelled
5. OrderExpired
6. TicketCreated
7. TicketUpdated
8. ChargeCreated

### Archietecture

1. Client - Next.js
2. Common NPM Module
3. Different services lisetd above
   - Auth (node/mongodb)
   - tickets (node/mongodb)
   - orders (node/mongodb)
   - payments (node/mongodb)
   - expiration (node/redis)
4. NATS Streaming Server (event bus)

### Setting up Google Cloud - steps

1. Create a new project
2. Enable cloud build
3. Install gcloud sdk
4. Install kubectls on gcloud sdk
5. Initialize the SDK
6. Install ingress-nginx and apply for Google cloud
7. Update the skaffold.yaml file to use GoogleCloud build
8. update host file with the ip address provided in loadbalancer in google cloud.
9. Restart skaffold




