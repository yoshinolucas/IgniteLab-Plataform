import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { Lesson } from "./components/Lesson"
import { Header } from "./components/Header"
import { Event } from "./pages/Event"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"




function App() {  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
    
   
  )
}

export default App
