import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.scss';
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';

// Initialize a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </StrictMode>,
)
