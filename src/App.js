import { BrowserRouter, Switch, Route, Routes, Redirect } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import logo from './logo.svg';
import './App.css';

import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Multiple from './pages/multiple/multiple';
import Forgot from './pages/forgot/forgot';
import Reset from './pages/reset/reset';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <BrowserRouter>
        <Routes>
          {/* <Switch> */}
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/home" element={<Home />} />
              <Route path="/multiple" element={<Multiple />} />
              {/* <Redirect to="/" /> */}
            {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    // </div>

    
  );
}

export default App;
